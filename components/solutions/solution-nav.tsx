/**
 * solution-nav.tsx — Navigation vers le domaine précédent et le suivant.
 * Le domaine 06 renvoie au 01 et inversement.
 */
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { hrefFor } from '@/lib/routes';
import { solutions, type SolutionId } from '@/lib/solutions';
import { Link } from '../app-link';
import { Glyph } from '../glyph';

interface SolutionNavProps {
  current: SolutionId;
  previousLabel: string;
  nextLabel: string;
}

export async function SolutionNav({ current, previousLabel, nextLabel }: SolutionNavProps) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('solutions');
  const index = solutions.findIndex((solution) => solution.id === current);
  const neighbours = [
    { label: previousLabel, solution: solutions[(index + solutions.length - 1) % solutions.length] },
    { label: nextLabel, solution: solutions[(index + 1) % solutions.length] },
  ];

  return (
    <nav className="grid gap-4 sm:grid-cols-2" aria-label={`${previousLabel} / ${nextLabel}`}>
      {neighbours.map(({ label, solution }) => (
        <Link key={label} href={hrefFor({ solutionId: solution.id }, locale)} className="card">
          <span className="label">{label}</span>
          <span className="flex items-center gap-4">
            <Glyph id={solution.id} size={40} />
            <span>
              <span className="label block">{solution.id}</span>
              <span className="font-bold">{t(solution.id)}</span>
            </span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
