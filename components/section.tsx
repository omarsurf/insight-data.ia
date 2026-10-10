/**
 * section.tsx — Section de page, avec son en-tête.
 * Sur ordinateur, l'étiquette se place dans la marge technique (colonnes 1
 * et 2) et le contenu occupe les colonnes 3 à 12 ; sur mobile, l'étiquette
 * passe au-dessus du titre.
 */
import type { ReactNode } from 'react';
import type { SectionIntro } from '@/content/types';

interface SectionProps {
  intro: SectionIntro;
  /** Identifiant du titre, pour relier la section à son intitulé. */
  id: string;
  children?: ReactNode;
}

export function Section({ intro, id, children }: SectionProps) {
  return (
    <section className="border-t border-line" aria-labelledby={id}>
      <div className="wrap grid gap-8 py-24 lg:grid-cols-12 lg:gap-6 lg:py-40">
        <p className="label lg:col-span-2">{intro.label}</p>
        <div className="grid gap-12 lg:col-span-10">
          <div className="grid gap-6">
            <h2 id={id} className="t-h2">{intro.title}</h2>
            {intro.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="max-w-[68ch] text-ink-muted first-of-type:text-ink first-of-type:[font-size:var(--text-lead)] first-of-type:leading-[1.55]">
                {paragraph}
              </p>
            ))}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
