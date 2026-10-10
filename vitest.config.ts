/**
 * vitest.config.ts — Tests unitaires.
 * Ne couvre que la logique sans interface de lib/ ; les parcours dans le
 * navigateur sont testés par Playwright (tests/e2e).
 */
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: { alias: { '@': fileURLToPath(new URL('./', import.meta.url)) } },
  test: { include: ['lib/**/*.test.ts'] },
});
