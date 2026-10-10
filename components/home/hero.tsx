/**
 * hero.tsx — Hero de la page d'accueil.
 * Slogan de marque sur trois lignes, sous-titre, phrase d'introduction et
 * deux boutons, sur trois plans de trame en perspective ; le tracé signature
 * court en bas. Premier moment fort : le slogan se dévoile, le tracé se
 * dessine et les plans s'inclinent selon le pointeur (design system, 6.3).
 */
import type { HomeContent } from '@/content/types';
import { ButtonLink } from '../button-link';
import { Trace } from '../glyph';

export function Hero({ content }: { content: HomeContent['hero'] }) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title" data-tilt>
      <div className="planes" aria-hidden="true">
        <div className="planes-tilt">
          <div className="plane plane-3" />
          <div className="plane plane-2" />
          <div className="plane plane-1" />
        </div>
      </div>

      <div className="wrap relative grid min-h-[min(560px,100svh)] content-center gap-6 pb-6 pt-16 lg:grid-cols-12">
        <div className="grid gap-6 lg:col-span-8 lg:col-start-3">
          <h1 id="hero-title" className="t-display">
            {content.sloganLines.map((line) => (
              <span key={line} className="hero-line lg:whitespace-nowrap">{line} </span>
            ))}
          </h1>
          <p className="t-lead max-w-[68ch]">{content.subtitle}</p>
          <p className="max-w-[68ch] text-ink-muted">{content.intro}</p>
          <div className="mt-2 flex flex-wrap gap-6">
            <ButtonLink href="/assessment" variant="primary">{content.primaryCta}</ButtonLink>
            <ButtonLink href="/solutions" variant="outline">{content.secondaryCta}</ButtonLink>
          </div>
        </div>
      </div>

      <div className="wrap relative pb-8"><Trace className="hero-trace" /></div>
    </section>
  );
}
