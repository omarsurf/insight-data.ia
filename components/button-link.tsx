/**
 * button-link.tsx — Bouton qui mène à une page, et lien fléché.
 * Un seul bouton « primary » par écran visible (règle C1 du design system).
 */
import type { ReactNode } from 'react';
import type { AppHref } from '@/i18n/navigation';
import { Link } from './app-link';
import { ArrowIcon } from './icons';

interface ButtonLinkProps {
  href: AppHref;
  /** « primary » : action principale du contenu ; « outline » : action secondaire. */
  variant: 'primary' | 'outline';
  children: ReactNode;
}

export function ButtonLink({ href, variant, children }: ButtonLinkProps) {
  return <Link href={href} className={`btn btn-${variant}`}>{children}</Link>;
}

/** Lien vers une page détaillée, suivi d'une flèche. */
export function ArrowLink({ href, children }: { href: AppHref; children: ReactNode }) {
  return (
    <Link href={href} className="arrow-link">
      <span>{children}</span>
      <ArrowIcon />
    </Link>
  );
}
