/**
 * assessment-contact.spec.ts — Pages Diagnostic gratuit et Contact, en français.
 * Vérifie le contenu attendu par le PRD (section 6.3) : cinq volets, sept
 * éléments reçus, quatre phases, périmètre, et l'absence de bandeau d'appel
 * sur ces deux pages. Les formulaires sont testés en phase 4.
 */
import { expect, test } from '@playwright/test';

test('la page Diagnostic détaille les volets, la synthèse, les phases et le périmètre', async ({ page }) => {
  await page.goto('/fr/diagnostic');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Découvrez le potentiel numérique de votre entreprise');
  await expect(page.getByRole('region', { name: 'Que comprend le diagnostic ?' }).getByRole('listitem')).toHaveCount(5);
  await expect(page.getByRole('region', { name: 'Que recevrez-vous ?' }).getByRole('listitem')).toHaveCount(7);
  await expect(page.getByRole('region', { name: 'Comment cela se passe-t-il ?' }).getByRole('listitem')).toHaveCount(4);
  await expect(page.getByText(/font l’objet d’une mission distincte/)).toBeVisible();
});

test('sur mobile, le formulaire de diagnostic précède le détail', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'L\'ordre empilé ne concerne que le mobile.');
  await page.goto('/fr/diagnostic');
  const form = await page.locator('#demande').boundingBox();
  const detail = await page.getByRole('heading', { name: 'Que comprend le diagnostic ?' }).boundingBox();
  expect(form!.y).toBeLessThan(detail!.y);
});

test('les pages Diagnostic et Contact n\'ont pas de bandeau d\'appel', async ({ page }) => {
  for (const url of ['/fr/diagnostic', '/fr/contact']) {
    await page.goto(url);
    await expect(page.getByRole('main').getByRole('link', { name: 'Demander un diagnostic gratuit' })).toHaveCount(0);
  }
});
