/**
 * site-header.tsx — En-tête fixe du site.
 * Logo, menu principal, panneau Solutions et sélecteur de langue. Aucun
 * bouton de diagnostic (décision V37 du PRD). Composant serveur : seul le
 * menu mobile demande du JavaScript.
 */
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from './app-link';
import type { Locale } from '@/i18n/routing';
import { hrefFor, type PageRoute, type StaticPath } from '@/lib/routes';
import { solutions } from '@/lib/solutions';
import { Glyph } from './glyph';
import { ArrowIcon, ChevronIcon } from './icons';
import { LanguageSwitch } from './language-switch';
import { LogoMarkSmall, LogoText } from './logo';
import { MobileMenu } from './mobile-menu';

/** Entrées du menu principal, hors Solutions qui ouvre un panneau. */
const mainLinks: { path: StaticPath; label: 'methodology' | 'industries' | 'about' | 'contact' }[] = [
  { path: '/methodology', label: 'methodology' },
  { path: '/industries', label: 'industries' },
  { path: '/about', label: 'about' },
  { path: '/contact', label: 'contact' },
];

/** Vrai si la page affichée est celle du chemin donné. */
function isCurrent(route: PageRoute, path: StaticPath): boolean {
  return 'path' in route && route.path === path;
}

export async function SiteHeader({ route }: { route: PageRoute }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const onSolutions = 'solutionId' in route || isCurrent(route, '/solutions');

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-canvas">
      <div className="wrap flex h-(--header-height) items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-2 text-[9.5px]">
          {/* Symbole réduit de 28 px sur mobile, de 32 px avec le texte sur ordinateur */}
          <span className="lg:hidden"><LogoMarkSmall size={28} /></span>
          <span className="hidden lg:block"><LogoMarkSmall size={32} /></span>
          <span className="hidden lg:block"><LogoText /></span>
          {/* Sur mobile, le texte du logo est absent : le nom est donné aux lecteurs d'écran */}
          <span className="sr-only lg:hidden">{t('site.name')}</span>
          <span className="sr-only">{t('site.homeSuffix')}</span>
        </Link>

        <nav className="hidden gap-2 lg:flex" aria-label={t('nav.label')}>
          <button
            type="button"
            className="nav-link"
            popoverTarget="panel-solutions"
            aria-current={onSolutions ? 'page' : undefined}
          >
            {t('nav.solutions')}
            <ChevronIcon size={16} />
          </button>
          {mainLinks.map(({ path, label }) => (
            <Link key={path} href={path} className="nav-link" aria-current={isCurrent(route, path) ? 'page' : undefined}>
              {t(`nav.${label}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitch route={route} />
        </div>

        <MobileMenu
          openLabel={t('nav.openMenu')}
          closeLabel={t('nav.closeMenu')}
          brand={<LogoMarkSmall size={28} />}
        >
          <nav aria-label={t('nav.label')}>
            <ul className="grid gap-1">
              <li><Link href="/solutions" className="t-h3 flex min-h-12 items-center font-bold">{t('nav.solutions')}</Link></li>
              {mainLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link href={path} className="t-h3 flex min-h-12 items-center font-bold">{t(`nav.${label}`)}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6"><LanguageSwitch route={route} /></div>
        </MobileMenu>
      </div>

      {/* Panneau Solutions : popover natif, ouvert au clic, fermé par Échap ou un clic extérieur */}
      <div id="panel-solutions" popover="auto" className="solutions-panel">
        <div className="wrap grid gap-2 py-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.id} href={hrefFor({ solutionId: solution.id }, locale)} className="panel-link">
              <Glyph id={solution.id} size={40} />
              <span>
                <span className="label block">{solution.id}</span>
                {t(`solutions.${solution.id}`)}
              </span>
            </Link>
          ))}
          <Link href="/solutions" className="col-span-full inline-flex min-h-11 items-center gap-2 px-3 font-medium text-ink">
            {t('nav.allSolutions')}
            <ArrowIcon className="text-accent" />
          </Link>
        </div>
      </div>
    </header>
  );
}
