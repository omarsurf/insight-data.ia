/**
 * motion.spec.ts — Animations de la phase 3.
 * Vérifie la scène épinglée du parcours, son repli empilé, le respect du
 * mouvement réduit (règle A3) et la lisibilité sans JavaScript (règle A4).
 */
import { expect, test, type Page } from '@playwright/test';

/** Part du décalage de la bande du tracé, de 0 (station 01) à 0,833 (station 06). */
async function stripShift(page: Page): Promise<number> {
  return page.locator('.scene-strip').evaluate((strip) => {
    const panel = strip.parentElement!.getBoundingClientRect();
    const box = strip.getBoundingClientRect();
    return (panel.left - box.left) / box.width;
  });
}

/** Fait défiler jusqu'à une fraction de la course épinglée de la scène. */
async function scrollScene(page: Page, fraction: number): Promise<void> {
  await page.locator('.scene').evaluate((scene, part) => {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
    const start = scene.getBoundingClientRect().top + window.scrollY - header;
    const travel = scene.getBoundingClientRect().height - (window.innerHeight - header);
    window.scrollTo(0, start + travel * part);
  }, fraction);
  // Laisse au navigateur le temps de recalculer l'animation liée au défilement.
  await page.waitForTimeout(200);
}

test('sur ordinateur, la scène s\'épingle et le tracé suit le défilement', async ({ page, isMobile }) => {
  test.skip(isMobile, 'La scène n\'est épinglée que sur ordinateur.');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/fr');

  const supported = await page.evaluate(() => CSS.supports('animation-timeline: view()'));
  const panel = page.locator('.scene-panel');

  if (!supported) {
    // Repli : sans animations au défilement, les stations restent empilées.
    await expect(panel).toBeHidden();
    await expect(page.locator('.scene-list a')).toHaveCount(6);
    return;
  }

  await scrollScene(page, 0);
  await expect(panel).toBeVisible();
  expect(await stripShift(page)).toBeCloseTo(0, 1);

  await scrollScene(page, 0.5);
  expect(await stripShift(page)).toBeCloseTo(0.4167, 1);
  // Les six liens restent visibles pendant toute la scène.
  for (const link of await page.locator('.scene-list a').all()) await expect(link).toBeInViewport();

  await scrollScene(page, 1);
  expect(await stripShift(page)).toBeCloseTo(0.8333, 1);
});

test('la scène tient dans une fenêtre d\'ordinateur portable', async ({ page, isMobile }) => {
  test.skip(isMobile, 'La scène n\'est épinglée que sur ordinateur.');
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('/fr');
  test.skip(!(await page.evaluate(() => CSS.supports('animation-timeline: view()'))), 'Scène empilée dans ce navigateur.');

  await scrollScene(page, 0.5);
  await expect(page.locator('.scene-panel')).toBeInViewport({ ratio: 1 });
  await expect(page.locator('.scene-note')).toBeInViewport({ ratio: 1 });
});

test('avec le mouvement réduit, rien ne bouge et la scène est empilée', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/fr');

  await expect(page.locator('.scene-panel')).toBeHidden();
  const animated = await page.evaluate(() =>
    [...document.querySelectorAll('.hero-line, .hero-trace, .reveal, .draw')]
      .filter((element) => getComputedStyle(element).animationName !== 'none').length,
  );
  expect(animated).toBe(0);
  await expect(page.locator('.reveal-pending, .draw-pending')).toHaveCount(0);
});

test('sans JavaScript, tout le contenu de l\'accueil est lisible', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/fr');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.scene-list a')).toHaveCount(6);
  // Aucun élément n'est masqué par une classe que seul le script pose.
  await expect(page.locator('.reveal-pending, .draw-pending')).toHaveCount(0);

  // La dernière section devient pleinement visible une fois à l'écran.
  const last = page.getByRole('heading', { name: 'Prêt à révéler le potentiel de vos données ?' });
  await last.scrollIntoViewIfNeeded();
  await expect(last).toBeVisible();
  await context.close();
});
