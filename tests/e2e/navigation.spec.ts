/**
 * navigation.spec.ts — Langues, URL et navigation.
 * Vérifie les 32 URL, la redirection de la racine, le sélecteur de langue
 * (règle L3 du PRD) et le parcours au clavier de l'en-tête.
 */
import { expect, test } from '@playwright/test';
import { pagePairs } from './pages';

test('les 32 URL répondent et portent la bonne langue', async ({ request }) => {
  for (const pair of pagePairs) {
    for (const [locale, url] of Object.entries(pair)) {
      const response = await request.get(url);
      expect(response.status(), url).toBe(200);
      expect(await response.text(), url).toContain(`<html lang="${locale}"`);
    }
  }
});

test('la racine redirige selon la langue du navigateur, sans poser de cookie', async ({ request }) => {
  const cases = [['en-US,en', '/en'], ['fr-FR,fr', '/fr'], ['de-DE,de', '/fr']] as const;
  for (const [acceptLanguage, expected] of cases) {
    const response = await request.get('/', { headers: { 'Accept-Language': acceptLanguage }, maxRedirects: 0 });
    expect(response.status()).toBe(307);
    expect(response.headers()['location']).toMatch(new RegExp(`${expected}$`));
    expect(response.headers()['set-cookie']).toBeUndefined();
  }
});

test('le sélecteur de langue mène à la page équivalente', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Sur mobile, le sélecteur est dans le menu : voir le test du menu mobile.');
  for (const pair of [pagePairs[13], pagePairs[5], pagePairs[0]]) {
    await page.goto(pair.fr);
    await page.getByRole('banner').getByRole('link', { name: /English version/ }).click();
    await expect(page).toHaveURL(pair.en);
    await page.getByRole('banner').getByRole('link', { name: /Version française/ }).click();
    await expect(page).toHaveURL(pair.fr);
  }
});

test('le panneau Solutions se parcourt au clavier et se ferme par Échap', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Le panneau Solutions n\'existe que sur ordinateur.');
  await page.goto('/fr');
  const trigger = page.getByRole('button', { name: 'Solutions' });
  const panel = page.locator('#panel-solutions');

  await trigger.focus();
  await page.keyboard.press('Enter');
  await expect(panel).toBeVisible();
  await expect(panel.getByRole('link')).toHaveCount(7);

  await page.keyboard.press('Escape');
  await expect(panel).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await panel.getByRole('link', { name: /Prévoir et anticiper/ }).click();
  await expect(page).toHaveURL('/fr/solutions/prevoir-anticiper');
});

test('le menu mobile s\'ouvre, change de langue et se ferme', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Le menu plein écran n\'existe que sur mobile.');
  await page.goto('/fr/a-propos');
  await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
  const menu = page.getByRole('dialog');
  await expect(menu).toBeVisible();

  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();

  await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
  await menu.getByRole('link', { name: /English version/ }).click();
  await expect(page).toHaveURL('/en/about');
});

test('le lien d\'évitement est le premier élément focalisable', async ({ page, browserName, isMobile }) => {
  test.skip(isMobile || browserName === 'webkit', 'La touche Tab ne parcourt pas les liens par défaut dans Safari.');
  await page.goto('/fr');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Aller au contenu' })).toBeFocused();
});
