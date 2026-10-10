/**
 * app-link.tsx — Lien interne du site.
 * Calcule côté serveur l'URL traduite (préfixe de langue et chemin) puis
 * rend un lien Next.js ordinaire. Aucun code d'internationalisation n'est
 * ainsi envoyé au navigateur.
 */
import type { ComponentProps } from 'react';
import NextLink from 'next/link';
import { getLocale } from 'next-intl/server';
import { getPathname, type AppHref } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

interface AppLinkProps extends Omit<ComponentProps<typeof NextLink>, 'href' | 'locale'> {
  /** Destination interne : chemin connu, avec ses paramètres s'il en a. */
  href: AppHref;
  /** Langue de destination ; par défaut, la langue de la page en cours. */
  locale?: Locale;
}

export async function Link({ href, locale, ...props }: AppLinkProps) {
  const target = locale ?? ((await getLocale()) as Locale);
  return <NextLink href={getPathname({ href, locale: target })} {...props} />;
}
