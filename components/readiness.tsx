/**
 * readiness.tsx — Section « maturité des données ».
 * Trois situations, chacune avec son type de trait d'en-tête : plein,
 * tireté, plein court (design system, section 7.11). Employée sur l'accueil
 * et sur la page Méthodologie.
 */
import type { ReadinessContent } from '@/content/types';
import { Section } from './section';

/** Les trois situations de maturité des données, chacune avec son type de trait. */
export function Readiness({ content }: { content: ReadinessContent }) {
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
