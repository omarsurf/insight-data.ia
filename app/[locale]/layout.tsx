/**
 * layout.tsx — Mise en page racine, une par langue.
 * Pose la langue du document, les deux polices et les styles communs.
 * Toutes les pages du site sont statiques (PRD, section 9.2).
 */
import type { Metadata, Viewport } from 'next';
import { Manrope, Martian_Mono } from 'next/font/google';
import { locale as rootLocale } from 'next/root-params';
import { routing } from '@/i18n/routing';
import { siteUrl } from '@/lib/metadata';
import '../globals.css';

// Manrope : titres et texte, la police du logo. Seule police préchargée.
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
// Martian Mono : étiquettes. Non préchargée, elle ne sert pas au premier affichage.
const martianMono = Martian_Mono({ subsets: ['latin'], variable: '--font-martian', display: 'swap', preload: false });

/** Interdit tout rendu à la requête : chaque route doit sortir en statique. */
export const ensureStatic = 'navigation';

/** Une version du site par langue. */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Insight Data & AI', template: '%s — Insight Data & AI' },
};

export const viewport: Viewport = {
  // Couleur du thème du navigateur : le fond de page (jeton canvas).
  themeColor: '#0A1428',
  colorScheme: 'dark',
};

export default async function RootLayout({ children }: LayoutProps<'/[locale]'>) {
  return (
    <html lang={await rootLocale()} className={`${manrope.variable} ${martianMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
