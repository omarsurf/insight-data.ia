/**
 * cta-banner.tsx — Bandeau d'appel au diagnostic.
 * Trame de points, repères d'angle, titre, texte et bouton principal.
 * Placé en bas des pages, sauf Diagnostic, Contact, pages légales et erreurs.
 */
import { ButtonLink } from './button-link';

interface CtaBannerProps {
  title: string;
  paragraphs: string[];
  cta: string;
}

export function CtaBanner({ title, paragraphs, cta }: CtaBannerProps) {
  return (
    <section className="wrap py-24 lg:py-40" aria-labelledby="cta-title">
      <div className="corners relative overflow-hidden rounded-base border border-line px-6 py-12 lg:p-16">
        <div className="dots absolute inset-0 [mask-image:linear-gradient(90deg,transparent,#000_60%)]" aria-hidden="true" />
        <div className="relative grid justify-items-start gap-4">
          <h2 id="cta-title" className="t-h2">{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-[68ch] text-ink-muted">{paragraph}</p>
          ))}
          <div className="mt-2"><ButtonLink href="/assessment" variant="primary">{cta}</ButtonLink></div>
        </div>
      </div>
    </section>
  );
}
