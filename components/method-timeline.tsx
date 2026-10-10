/**
 * method-timeline.tsx — Frise des cinq étapes de la méthode.
 * Ligne graduée horizontale sur ordinateur, verticale sur mobile. Un trait
 * tireté revient de la dernière étape vers la première : la démarche est
 * itérative (design system, section 7.10).
 */
import type { MethodologyContent } from '@/content/types';

type TimelineProps = Pick<MethodologyContent, 'steps' | 'stepLabel'>;

export function MethodTimeline({ steps, stepLabel }: TimelineProps) {
  return (
    <div>
      <ol className="timeline">
        {steps.map((step, index) => (
          <li key={step.name} className="timeline-step reveal">
            <p className="label">{stepLabel} {index + 1}</p>
            <h2 className="t-h3">{step.name}</h2>
            {step.paragraphs.map((paragraph) => (
              <p key={paragraph} className="t-small text-ink-muted">{paragraph}</p>
            ))}
          </li>
        ))}
      </ol>
      <svg className="timeline-return draw" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M900 2C900 28 860 34 800 34H60C20 34 6 24 6 6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
        <path d="M1 12L6 4L11 12" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
