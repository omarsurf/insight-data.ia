/**
 * site-footer.tsx — Pied de page.
 * Tracé signature, plan du site complet (dont Collaboration et Contact),
 * liens légaux, sélecteur de langue et les six mots du parcours.
 */
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from './app-link';
import type { Locale } from '@/i18n/routing';
import { hrefFor, type PageRoute } from '@/lib/routes';
import { solutions } from '@/lib/solutions';
import { Trace } from './glyph';
import { LanguageSwitch } from './language-switch';
import { LogoMarkFull, LogoText } from './logo';

const linkClass = 'inline-flex min-h-11 items-center text-ink-muted transition-colors duration-(--duration-fast) hover:text-accent';

export async function SiteFooter({ route }: { route: PageRoute }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <footer className="mt-24 border-t border-line lg:mt-40" aria-label={t('footer.label')}>
      <div className="wrap pt-12">
        <Trace />
      </div>

      <div className="wrap grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="grid content-start gap-4">
          <Link href="/" className="inline-flex items-center gap-3 text-[12px]">
            <LogoMarkFull size={56} />
            <LogoText />
            <span className="sr-only">{t('site.homeSuffix')}</span>
          </Link>
          {/* Adresse e-mail et téléphone : attendus du fondateur (PRD, section 14) */}
          <p className="t-small text-ink-muted">{t('footer.contactPending')}</p>
        </div>

        <nav aria-label={t('nav.solutions')}>
          <h2 className="label mb-2">{t('nav.solutions')}</h2>
          <ul>
            {solutions.map((solution) => (
              <li key={solution.id}>
                <Link href={hrefFor({ solutionId: solution.id }, locale)} className={`t-small ${linkClass}`}>
                  {t(`solutions.${solution.id}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t('footer.company')}>
          <h2 className="label mb-2">{t('footer.company')}</h2>
          <ul>
            <li><Link href="/methodology" className={`t-small ${linkClass}`}>{t('nav.methodology')}</Link></li>
            <li><Link href="/industries" className={`t-small ${linkClass}`}>{t('nav.industries')}</Link></li>
            <li><Link href="/engagement-models" className={`t-small ${linkClass}`}>{t('nav.collaboration')}</Link></li>
            <li><Link href="/about" className={`t-small ${linkClass}`}>{t('nav.about')}</Link></li>
            <li><Link href="/assessment" className={`t-small ${linkClass}`}>{t('nav.assessment')}</Link></li>
            <li><Link href="/contact" className={`t-small ${linkClass}`}>{t('nav.contact')}</Link></li>
          </ul>
        </nav>

        <nav aria-label={t('footer.legal')}>
          <h2 className="label mb-2">{t('footer.legal')}</h2>
          <ul>
            <li><Link href="/legal-notice" className={`t-small ${linkClass}`}>{t('nav.legal')}</Link></li>
            <li><Link href="/privacy" className={`t-small ${linkClass}`}>{t('nav.privacy')}</Link></li>
          </ul>
          <div className="mt-4"><LanguageSwitch route={route} /></div>
        </nav>
      </div>

      <div className="wrap border-t border-line py-6">
        <p className="label">{t('footer.signature')}</p>
      </div>
    </footer>
  );
}
