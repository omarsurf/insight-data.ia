/**
 * glyph.tsx — Les six glyphes de station et le tracé signature.
 * Dessins de référence : specimen/index.html (symboles g1 à g6 et trace).
 * La couleur du trait principal se règle par la variable CSS --g.
 */
import type { ReactNode } from 'react';
import type { SolutionId } from '@/lib/solutions';

const drawings: Record<SolutionId, ReactNode> = {
  // CONNECTER : des traits épars convergent en une ligne
  '01': (
    <>
      <path className="g-main" d="M7 9C17 9 18 24 28 24M6 20C15 20 19 24 28 24M8 31C17 31 20 24 28 24M6 41C17 41 18 24 28 24M28 24H42" />
      {[[7, 9], [6, 20], [8, 31], [6, 41]].map(([cx, cy]) => <circle key={cy} className="g-point" cx={cx} cy={cy} r="1.6" />)}
      <circle className="g-node" cx="42" cy="24" r="2.5" />
    </>
  ),
  // VISUALISER : la ligne devient une courbe sur des axes
  '02': (
    <>
      <path className="g-aux" d="M7 6V41H43" />
      <path className="g-main" d="M10 34C16 34 17 20 23 22S31 30 35 17S40 11 42 10" />
    </>
  ),
  // COMPRENDRE : une tendance et des écarts autour des points
  '03': (
    <>
      <path className="g-aux g-aux-dash" d="M12 30V32.9M17 32V29.1M22 22V25.3M27 25V21.5M32 14V17.6M37 18V13.8" />
      <path className="g-main" d="M8 36L42 10" />
      {[[12, 30], [17, 32], [22, 22], [27, 25], [32, 14], [37, 18]].map(([cx, cy]) => <circle key={cx} className="g-point" cx={cx} cy={cy} r="1.6" />)}
    </>
  ),
  // PRÉVOIR : la ligne passe en tireté, entourée d'une zone d'incertitude
  '04': (
    <>
      <path className="g-band" d="M22 24L43 3V24Z" />
      <path className="g-band" d="M22 24L43 8V18Z" />
      <path className="g-aux g-aux-dash" d="M22 6V42" />
      <path className="g-main" d="M5 31C11 31 14 21 22 24" />
      <path className="g-main g-dash" d="M22 24C29 26.5 35 16 43 13" />
      <circle className="g-node" cx="22" cy="24" r="2.5" />
    </>
  ),
  // AUTOMATISER : un signal carré régulier qui boucle
  '05': (
    <>
      <path className="g-aux g-aux-dash" d="M41 36C31 43 17 43 7 36" />
      <path className="g-aux" d="M7 36L8 40.2M7 36L11.2 35.4" />
      <path className="g-main" d="M5 30H12V18H20V30H28V18H36V30H43" />
    </>
  ),
  // INNOVER : la ligne se ramifie en branches tiretées
  '06': (
    <>
      <path className="g-main" d="M5 24H20" />
      <path className="g-main g-dash" d="M20 24C29 24 30 9 40 8M20 24C30 24 33 22 40 21M20 24C29 24 30 38 40 39" />
      <circle className="g-node" cx="20" cy="24" r="2.5" />
      {[8, 21, 39].map((cy) => <circle key={cy} className="g-node-open" cx="42" cy={cy} r="2.2" />)}
    </>
  ),
};

interface GlyphProps {
  id: SolutionId;
  /** Taille en pixels ; 48 par défaut, la taille d'emploi du design system. */
  size?: number;
}

/** Glyphe d'un domaine : le segment du tracé qui lui correspond. */
export function Glyph({ id, size = 48 }: GlyphProps) {
  return (
    <svg className="flex-none" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      {drawings[id]}
    </svg>
  );
}

/** Tracé signature complet : les six stations à la suite, en version statique. */
export function Trace({ className = '' }: { className?: string }) {
  return (
    <svg className={`block h-auto w-full ${className}`} viewBox="0 0 1200 120" aria-hidden="true">
      <path className="g-aux" d="M210 14V104H392" />
      <path className="g-aux" d="M408 78L596 28" />
      <path className="g-aux g-aux-dash" d="M600 8V112" />
      <path className="g-band" d="M600 46L800 4V62Z" />
      <path className="g-band" d="M600 46L800 14V46Z" />
      <path className="g-main" d="M12 18C80 18 90 60 150 60M10 46C70 46 100 60 150 60M14 78C80 78 100 60 150 60M10 104C80 104 90 60 150 60" />
      <path className="g-main" d="M150 60H200C240 60 250 34 290 42S350 84 400 56C440 34 470 72 520 52S570 44 600 46" />
      <path className="g-main g-dash" d="M600 46C660 52 720 30 800 30" />
      <path className="g-main" d="M800 30H830V62H870V30H910V62H950V30H1000" />
      <path className="g-main g-dash" d="M1000 30C1060 30 1100 10 1182 10M1000 30C1070 30 1110 46 1182 50M1000 30C1060 30 1100 86 1182 100" />
      {[[12, 18], [10, 46], [14, 78], [10, 104]].map(([cx, cy]) => <circle key={cy} className="g-point" cx={cx} cy={cy} r="3" />)}
      {[[440, 58], [480, 72], [520, 40], [560, 48]].map(([cx, cy]) => <circle key={cx} className="g-point" cx={cx} cy={cy} r="2.5" />)}
      {[[150, 60], [400, 56], [600, 46], [800, 30], [1000, 30]].map(([cx, cy]) => <circle key={cx} className="g-node" cx={cx} cy={cy} r="4.5" />)}
      {[10, 50, 100].map((cy) => <circle key={cy} className="g-node-open" cx="1186" cy={cy} r="4" />)}
    </svg>
  );
}
