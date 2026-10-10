/**
 * breadcrumb.tsx — Fil d'Ariane du parcours, en haut d'une page solution.
 * Six nœuds reliés, chacun étant un lien vers son domaine ; le nœud du
 * domaine affiché est plein.
 */
import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { hrefFor } from '@/lib/routes';
import { solutions, type SolutionId } from '@/lib/solutions';
import { Link } from '../app-link';

export async function TraceBreadcrumb({ current, label }: { current: SolutionId; label: string }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('solutions');

  return (
    <nav aria-label={label}>
      <ol className="crumbs">
        {solutions.map((solution) => (
          <li key={solution.id} className="crumb">
            <Link
              href={hrefFor({ solutionId: solution.id }, locale)}
              className="crumb-link"
              aria-current={solution.id === current ? 'page' : undefined}
            >
              <span className="crumb-dot" aria-hidden="true" />
              <span className="sr-only">{solution.id} — {t(solution.id)}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
