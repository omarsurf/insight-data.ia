/**
 * methodology.spec.ts — Page Méthodologie, en français.
 * Vérifie les cinq étapes, les trois situations de maturité des données et
 * la présence, en texte courant, de la phrase de non-garantie (exigence D7).
 */
import { expect, test } from '@playwright/test';

test('la méthodologie présente cinq étapes, trois situations et l\'engagement', async ({ page }) => {
  await page.goto('/fr/methodologie');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Partir du problème, pas de la technologie.');
  await expect(page.locator('ol.timeline > li')).toHaveCount(5);
  await expect(page.getByRole('heading', { name: /^Quand / })).toHaveCount(3);
  await expect(page.getByRole('heading', { name: 'Ce à quoi nous nous engageons' })).toBeVisible();
  await expect(page.getByText(/Nous ne garantissons pas à l’avance/)).toBeVisible();
});
