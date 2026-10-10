/**
 * titled-list.tsx — Liste d'éléments titrés (design system, section 7.12).
 * Lignes séparées par des filets : titre à gauche, texte à droite ; sur
 * mobile, le titre passe au-dessus. Sert aux secteurs, aux modalités de
 * collaboration et aux arguments.
 */
import type { TitledText } from '@/content/types';

interface TitledListProps {
  items: TitledText[];
  /** Niveau du titre de chaque élément, selon sa place dans la page. */
  headingLevel: 2 | 3;
}

export function TitledList({ items, headingLevel }: TitledListProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';

  return (
    <ul className="border-t border-line">
      {items.map((item) => (
        <li key={item.title} className="grid gap-2 border-b border-line py-6 md:grid-cols-[2fr_3fr] md:gap-12">
          <Heading className="t-h3">{item.title}</Heading>
          <p className="max-w-[68ch] text-ink-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
