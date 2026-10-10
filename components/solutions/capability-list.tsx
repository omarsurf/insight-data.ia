/**
 * capability-list.tsx — Fiche de capacités d'un domaine.
 * Lignes séparées par des filets, chacune avec un index mono ; deux
 * colonnes à partir de 768 px. Peut porter un titre et du texte autour
 * (page du domaine 06).
 */
import type { CapabilityGroup } from '@/content/types';
import { ConditionNote } from '../blocks';

interface CapabilityListProps {
  group: CapabilityGroup;
  /** Étiquette de la note conditionnelle. */
  conditionLabel: string;
}

export function CapabilityList({ group, conditionLabel }: CapabilityListProps) {
  return (
    <div className="grid gap-6">
      {group.title && <h2 className="t-h2">{group.title}</h2>}
      {group.intro?.map((paragraph) => <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>)}
      <div className="grid gap-4">
        <h3 className="label">{group.label}</h3>
        <ol className="grid gap-x-12 md:grid-cols-2">
          {group.items.map((item, index) => (
            <li key={item} className="flex items-baseline gap-4 border-b border-line py-3">
              <span className="label">{String(index + 1).padStart(2, '0')}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
      {group.notes?.map((paragraph) => <p key={paragraph} className="max-w-[68ch] text-ink-muted">{paragraph}</p>)}
      {group.condition && <ConditionNote label={conditionLabel} text={group.condition} />}
    </div>
  );
}
