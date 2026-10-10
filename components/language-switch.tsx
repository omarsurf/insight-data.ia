/**
 * language-switch.tsx — Sélecteur de langue.
 * Mène à la même page dans l'autre langue, pas à l'accueil (règle L3).
 */
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from './app-link';
import { routing, type Locale } from '@/i18n/routing';
import { hrefFor, type PageRoute } from '@/lib/routes';

/** Affiche « FR / EN » ; la langue courante est marquée, l'autre est un lien. */
export async function LanguageSwitch({ route }: { route: PageRoute }) {
  const current = (await getLocale()) as Locale;
  const t = await getTranslations('nav');

  return (
    <div className="label flex min-h-11 items-center gap-1.5" role="group" aria-label={t('language')}>
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 && <span aria-hidden="true">/</span>}
          {locale === current ? (
            <span className="px-0.5 py-3 text-ink" aria-current="true">{locale}</span>
          ) : (
            <Link
              className="px-0.5 py-3 transition-colors duration-(--duration-fast) hover:text-accent"
              href={hrefFor(route, locale)}
              locale={locale}
              hrefLang={locale}
              lang={locale}
            >
              {locale}
              <span className="sr-only"> — {t('switchTo')}</span>
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
