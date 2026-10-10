/**
 * solutions.spec.ts — Page Solutions et pages de domaine, en français.
 * Vérifie les six cartes, le gabarit commun (PRD, section 6.3), les blocs
 * propres aux domaines 04 et 06, et la navigation entre domaines.
 */
import { expect, test } from '@playwright/test';

test('la page Solutions présente six cartes menant aux domaines', async ({ page }) => {
  await page.goto('/fr/solutions');
  const cards = page.getByRole('main').locator('a.card');
  await expect(cards).toHaveCount(6);

  await cards.nth(1).click();
  await expect(page).toHaveURL('/fr/solutions/visualiser-piloter-performance');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Visualiser et piloter la performance');
});

test('chaque page de domaine liste dix capacités, un exemple et un objectif', async ({ page }) => {
  for (const slug of ['organiser-connecter-donnees', 'analyser-comprendre', 'automatiser-integrer']) {
    await page.goto(`/fr/solutions/${slug}`);
    // La fiche de capacités est la seule liste ordonnée hors du fil d'Ariane.
    await expect(page.getByRole('main').locator('ol:not(.crumbs) > li')).toHaveCount(10);
    await expect(page.getByText('Exemple d’application')).toBeVisible();
    await expect(page.getByText(/^Notre objectif/)).toBeVisible();
  }
});

test('le domaine 04 porte le bloc de faisabilité et ses six critères', async ({ page }) => {
  await page.goto('/fr/solutions/prevoir-anticiper');
  await expect(page.getByRole('heading', { name: 'La faisabilité d’abord' })).toBeVisible();
  await expect(page.locator('ul.bullets > li')).toHaveCount(6);
});

test('le domaine 06 porte ses deux sous-sections', async ({ page }) => {
  await page.goto('/fr/solutions/innover-intelligence-artificielle');
  await expect(page.getByRole('heading', { name: 'Vision par ordinateur industrielle' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /IA générative/ })).toBeVisible();
});

test('le fil d\'Ariane et la navigation relient les six domaines en boucle', async ({ page }) => {
  await page.goto('/fr/solutions/innover-intelligence-artificielle');
  const crumbs = page.getByRole('navigation', { name: 'Les six domaines du parcours' }).getByRole('link');
  await expect(crumbs).toHaveCount(6);
  await expect(crumbs.nth(5)).toHaveAttribute('aria-current', 'page');

  // Depuis le domaine 06, « suivant » revient au domaine 01.
  await page.getByRole('link', { name: /Domaine suivant/ }).click();
  await expect(page).toHaveURL('/fr/solutions/organiser-connecter-donnees');
});
