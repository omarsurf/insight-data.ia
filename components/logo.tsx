/**
 * logo.tsx — Le logo « Emergence », recopié à l'identique de brand/.
 * Symbole complet à partir de 48 px, symbole réduit en dessous (règle de la
 * planche). Le logo n'est ni redessiné ni recoloré.
 */

interface MarkProps {
  /** Hauteur et largeur en pixels. */
  size: number;
}

/** Symbole réduit : six points et le trait, pour les petites tailles. */
export function LogoMarkSmall({ size }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect className="logo-bar" x="26" y="5" width="12" height="54" rx="6" />
      {[11, 53].map((cx) => [14, 32, 50].map((cy) => (
        <circle key={`${cx}-${cy}`} className="logo-point" cx={cx} cy={cy} r="5" />
      )))}
    </svg>
  );
}

/** Symbole complet, avec ses liens : à employer à partir de 48 px. */
export function LogoMarkFull({ size }: MarkProps) {
  const inner = [[10, 2.3], [21, 3], [32, 3.6], [43, 3], [54, 2.3]] as const;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path className="logo-link" d="M8 15L19 10M8 15L19 21M8 27L19 21M8 27L19 32M8 41L19 32M8 41L19 43M8 52L19 43M8 52L19 54" />
      <path className="logo-link" d="M56 12L45 10M56 12L45 21M56 25L45 21M56 25L45 32M56 37L45 32M56 37L45 43M56 50L45 43M56 50L45 54" />
      <path className="logo-link-bar" d="M19 10L28 10M19 21L28 21M19 32L28 32M19 43L28 43M19 54L28 54M45 10L36 10M45 21L36 21M45 32L36 32M45 43L36 43M45 54L36 54" />
      <rect className="logo-bar" x="28" y="4" width="8" height="56" rx="4" />
      {[19, 45].map((cx) => inner.map(([cy, r]) => (
        <circle key={`${cx}-${cy}`} className="logo-point" cx={cx} cy={cy} r={r} />
      )))}
      {[15, 27, 41, 52].map((cy) => <circle key={`l${cy}`} className="logo-point" cx="8" cy={cy} r="1.9" fillOpacity="0.55" />)}
      {[12, 25, 37, 50].map((cy) => <circle key={`r${cy}`} className="logo-point" cx="56" cy={cy} r="1.9" fillOpacity="0.55" />)}
    </svg>
  );
}

/**
 * Texte du logo : « INSIGHT » au-dessus de « DATA & AI », en Manrope.
 * Il est lu par les lecteurs d'écran : le nom accessible d'un lien doit
 * contenir son texte visible (WCAG 2.5.3).
 */
export function LogoText() {
  return (
    <span className="logo-text">
      <span className="logo-w1">INSIGHT</span>{' '}
      <span className="logo-w2">DATA &amp; AI</span>
    </span>
  );
}
