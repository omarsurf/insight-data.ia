/**
 * company-pages.spec.ts — Pages Secteurs, Collaboration et À propos, en français.
 * Vérifie la structure attendue par le PRD (section 6.3) et la présence des
 * mises en garde de faisabilité en texte courant.
 */
import { expect, test } from '@playwright/test';

test('la page Secteurs présente six secteurs et son avertissement de faisabilité', async ({ page }) => {
  await page.goto('/fr/secteurs');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Des solutions Data & AI pour différents secteurs');
  await expect(page.getByRole('main').getByRole('heading', { level: 2 })).toHaveCount(7);
  await expect(page.getByText(/La faisabilité de chaque projet est évaluée/)).toBeVisible();
});

test('la page Collaboration présente quatre modalités', async ({ page }) => {
  await page.goto('/fr/collaboration');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Des services flexibles. Des solutions évolutives.');
  await expect(page.getByRole('main').getByRole('heading', { level: 2 })).toHaveCount(5);
});

test('la page À propos réunit l\'introduction, la vision, les arguments et l\'engagement', async ({ page }) => {
  await page.goto('/fr/a-propos');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(page.getByText(/Notre principe/)).toBeVisible();
  await expect(page.getByRole('region', { name: /Des données dispersées/ }).getByRole('listitem')).toHaveCount(6);
  await expect(page.getByRole('region', { name: /La technologie au service/ }).getByRole('listitem')).toHaveCount(7);
  await expect(page.getByRole('heading', { name: 'Des solutions concrètes. Des progrès mesurables.' })).toBeVisible();
});
