/**
 * page-header.tsx — En-tête et corps d'une page détaillée.
 * Sur ordinateur, l'étiquette se place dans la marge technique et le reste
 * occupe les colonnes 3 à 12. Le titre de niveau 1 de la page s'y trouve.
 */
import type { ReactNode } from 'react';

interface PageBodyProps {
  /** Étiquette mono de la marge technique. */
  label: string;
  title: string;
  /** Tout ce qui suit le titre : chapeau, blocs, listes. */
  children: ReactNode;
}

export function PageBody({ label, title, children }: PageBodyProps) {
  return (
    <div className="wrap grid gap-8 py-16 lg:grid-cols-12 lg:gap-6 lg:py-24">
      <p className="label lg:col-span-2">{label}</p>
      <div className="grid gap-12 lg:col-span-10">
        <h1 className="t-h1">{title}</h1>
        {children}
      </div>
    </div>
  );
}
