/**
 * playwright.config.ts — Tests de bout en bout et d'accessibilité.
 * Lance le site compilé, puis les tests sur les trois moteurs de navigateur
 * demandés par le PRD (section 10).
 */
import { defineConfig, devices } from '@playwright/test';

const port = 3210;

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: `http://localhost:${port}` },
  webServer: {
    command: `npm run build && npm run start -- -p ${port}`,
    url: `http://localhost:${port}/fr`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    // Profil mobile sur Chromium : il vérifie la mise en page étroite et le menu.
    // Safari sur iPhone est couvert par le projet webkit et par la vérification manuelle.
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
