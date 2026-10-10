/**
 * accessibility.spec.ts — Contrôle automatique d'accessibilité.
 * Passe axe (règles WCAG 2.2 niveau AA) sur chaque gabarit de page, dans
 * les deux langues. Ne remplace pas la vérification manuelle au clavier
 * et au lecteur d'écran.
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/** Un représentant par gabarit : accueil, page simple, page solution. */
const templates = [
  '/fr',
  '/en',
  '/fr/a-propos',
  '/en/about',
  '/fr/solutions',
  '/fr/methodologie',
  '/fr/solutions/prevoir-anticiper',
  '/fr/solutions/innover-intelligence-artificielle',
  '/en/solutions/predict-anticipate',
];

for (const url of templates) {
  test(`aucune violation d'accessibilité sur ${url}`, async ({ page }) => {
    await page.goto(url);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    // Chaque violation est rapportée avec les éléments en cause, pour être lisible dans le journal.
    const report = results.violations.map((violation) => ({
      rule: violation.id,
      elements: violation.nodes.map((node) => `${node.target.join(' ')} — ${node.failureSummary}`),
    }));
    expect(report).toEqual([]);
  });
}
