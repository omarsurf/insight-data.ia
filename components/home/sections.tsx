/**
 * sections.tsx — Les sections de l'accueil qui suivent la vision :
 * aperçu de la méthode, maturité des données, raisons de nous choisir et
 * présentation du diagnostic. Chacune résume une page détaillée et y renvoie.
 */
import type { HomeContent } from '@/content/types';
import { ArrowLink, ButtonLink } from '../button-link';
import { Section } from '../section';

/** Les cinq étapes de la méthode, en aperçu. */
export function MethodPreview({ content }: { content: HomeContent['method'] }) {
  return (
    <Section intro={content} id="method-title">
      <ol className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-5">
        {content.steps.map((step, index) => (
          <li key={step.name} className="grid content-start gap-2 border-t border-line-strong pt-4">
            <p className="label">{content.stepLabel} {index + 1}</p>
            <h3 className="t-h3">{step.name}</h3>
            <p className="t-small text-ink-muted">{step.text}</p>
          </li>
        ))}
      </ol>
      <ArrowLink href="/methodology">{content.link}</ArrowLink>
    </Section>
  );
}

/** Les trois situations de maturité des données, chacune avec son type de trait. */
export function Readiness({ content }: { content: HomeContent['readiness'] }) {
  return (
    <Section intro={content} id="readiness-title">
      <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
        {content.cases.map((item) => (
          <li key={item.title} className="grid content-start gap-4">
            <span className={`stroke-${item.stroke}`} aria-hidden="true" />
            <h3 className="t-h3">{item.title}</h3>
            <p className="text-ink-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Les sept arguments, par leur titre seul ; le détail est sur la page À propos. */
export function WhyUs({ content }: { content: HomeContent['why'] }) {
  return (
    <Section intro={content} id="why-title">
      <ol>
        {content.items.map((item, index) => (
          <li key={item} className="flex items-baseline gap-4 border-b border-line py-3">
            <span className="label">{String(index + 1).padStart(2, '0')}</span>
            <span className="t-h3 font-bold">{item}</span>
          </li>
        ))}
      </ol>
      <ArrowLink href="/about">{content.link}</ArrowLink>
    </Section>
  );
}

/** Ce que comprend le diagnostic gratuit, et le bouton pour le demander. */
export function AssessmentPreview({ content }: { content: HomeContent['assessment'] }) {
  return (
    <Section intro={content} id="assessment-title">
      <div className="grid gap-6">
        <h3 className="label">{content.includesTitle}</h3>
        <ul className="grid gap-x-12 md:grid-cols-2">
          {content.items.map((item) => (
            <li key={item.title} className="grid gap-1 border-b border-line py-4">
              <span className="font-bold">{item.title}</span>
              <span className="t-small text-ink-muted">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* En contour : le bouton principal de cet écran est celui du bandeau qui suit (règle C1). */}
      <div><ButtonLink href="/assessment" variant="outline">{content.cta}</ButtonLink></div>
    </Section>
  );
}
