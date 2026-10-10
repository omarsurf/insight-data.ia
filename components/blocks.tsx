/**
 * blocks.tsx — Blocs de contenu communs aux pages détaillées :
 * exemple d'application, note conditionnelle et phrase d'objectif
 * (design system, sections 7.7 à 7.9).
 */

/** Bloc « Exemple d'application », avec repères d'angle et ligne de cote. */
export function ExampleBlock({ label, paragraphs }: { label: string; paragraphs: string[] }) {
  return (
    <div className="example corners">
      <p className="label">{label}</p>
      {paragraphs.map((paragraph) => <p key={paragraph} className="max-w-[68ch]">{paragraph}</p>)}
    </div>
  );
}

/** Mise en garde de faisabilité : bande hachurée, texte aussi lisible que le reste. */
export function ConditionNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="note">
      <p className="label">{label}</p>
      <p className="max-w-[68ch]">{text}</p>
    </div>
  );
}

/** Phrase « Notre objectif : … », précédée d'un trait cyan. */
export function Goal({ text }: { text: string }) {
  return (
    <div className="goal">
      <p className="t-lead max-w-[68ch]">{text}</p>
    </div>
  );
}
