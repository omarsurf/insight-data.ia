/**
 * solution-card.tsx — Carte d'un domaine, sur la page Solutions.
 * Toute la carte est un lien : numéro, glyphe, nom, question d'accroche.
 */
import type { ReactNode } from 'react';
import type { AppHref } from '@/i18n/navigation';
import type { SolutionId } from '@/lib/solutions';
import { Link } from '../app-link';
import { Glyph } from '../glyph';
import { ArrowIcon } from '../icons';

interface SolutionCardProps {
  id: SolutionId;
  href: AppHref;
  name: string;
  hook: string;
  /** Libellé du lien fléché, par exemple « Découvrir ». */
  action: ReactNode;
}

export function SolutionCard({ id, href, name, hook, action }: SolutionCardProps) {
  return (
    <Link href={href} className="card">
      <span className="flex items-start justify-between">
        <span className="label">{id}</span>
        <Glyph id={id} />
      </span>
      <h2 className="t-h3">{name}</h2>
      <p className="text-ink-muted">{hook}</p>
      <span className="arrow-link">
        <span>{action}</span>
        <ArrowIcon />
      </span>
    </Link>
  );
}
