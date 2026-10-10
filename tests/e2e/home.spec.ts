/**
 * home.spec.ts — Page d'accueil française.
 * Vérifie la structure attendue par le PRD (section 6.3) : slogan, six
 * stations menant aux pages solution, hiérarchie des titres et accès au
 * diagnostic.
 */
import { expect, test } from '@playwright/test';

test('l\'accueil présente le slogan et un seul titre de niveau 1', async ({ page }) => {
  await page.goto('/fr');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Révélez les\s+informations cachées\s+dans vos données\./);
});

test('les six stations mènent chacune à sa page solution', async ({ page }) => {
  await page.goto('/fr');
  const stations = page.getByRole('group', { name: /Des données dispersées/ }).getByRole('listitem');
  await expect(stations).toHaveCount(6);

  await stations.nth(3).getByRole('link').click();
  await expect(page).toHaveURL('/fr/solutions/prevoir-anticiper');
});

test('le diagnostic est accessible depuis le hero et le bas de page, pas depuis l\'en-tête', async ({ page }) => {
  await page.goto('/fr');
  const label = 'Demander un diagnostic gratuit';
  await expect(page.getByRole('banner').getByRole('link', { name: label })).toHaveCount(0);
  await expect(page.getByRole('main').getByRole('link', { name: label })).toHaveCount(3);

  await page.getByRole('main').getByRole('link', { name: label }).first().click();
  await expect(page).toHaveURL('/fr/diagnostic');
});
