/**
 * icons.tsx — Les icônes d'interface, dessinées en SVG en ligne.
 * Grille de 24 px, trait de 1,5 px ; aucune bibliothèque d'icônes.
 */
import type { ReactNode } from 'react';

interface IconProps {
  /** Taille en pixels ; 20 par défaut. */
  size?: number;
  className?: string;
}

/** Enveloppe commune : une icône est toujours décorative. */
function Icon({ size = 20, className = '', children }: IconProps & { children: ReactNode }) {
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
}

export function ChevronIcon(props: IconProps) {
  return <Icon {...props}><path d="M6 9l6 6 6-6" /></Icon>;
}

export function MenuIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
}

export function CloseIcon(props: IconProps) {
  return <Icon {...props}><path d="M6 6l12 12M18 6L6 18" /></Icon>;
}
