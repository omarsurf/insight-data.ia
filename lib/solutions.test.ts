/**
 * solutions.test.ts — Vérifie la table des six domaines : identifiants,
 * unicité des slugs et recherche par slug dans chaque langue.
 */
import { describe, expect, it } from 'vitest';
import { findSolutionBySlug, solutions } from './solutions';

describe('solutions', () => {
  it('contient les six domaines, numérotés de 01 à 06', () => {
    expect(solutions.map((solution) => solution.id)).toEqual(['01', '02', '03', '04', '05', '06']);
  });

  it.each(['fr', 'en'] as const)('a des slugs uniques et bien formés en %s', (locale) => {
    const slugs = solutions.map((solution) => solution.slug[locale]);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z]+(-[a-z]+)*$/);
  });

  it('retrouve un domaine par son slug dans la bonne langue seulement', () => {
    expect(findSolutionBySlug('prevoir-anticiper', 'fr')?.id).toBe('04');
    expect(findSolutionBySlug('predict-anticipate', 'en')?.id).toBe('04');
    expect(findSolutionBySlug('prevoir-anticiper', 'en')).toBeUndefined();
    expect(findSolutionBySlug('inconnu', 'fr')).toBeUndefined();
  });
});
