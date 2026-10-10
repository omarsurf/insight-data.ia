/**
 * page.tsx — Page « Diagnostic gratuit ».
 * Sur ordinateur, deux colonnes : le texte à gauche, le formulaire à droite,
 * qui reste à l'écran pendant le défilement. Sur mobile : l'introduction,
 * le formulaire, puis le détail (PRD, section 6.3). Le formulaire lui-même
 * arrive en phase 4.
 */
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { ConditionNote } from '@/components/blocks';
import { FormPlaceholder } from '@/components/form-placeholder';
import { PagePlaceholder } from '@/components/page-placeholder';
import { PageShell } from '@/components/page-shell';
import { getAssessmentContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/metadata';
import type { PageRoute } from '@/lib/routes';

const route: PageRoute = { path: '/assessment' };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pages');
  return buildMetadata(route, (await getLocale()) as Locale, t('assessment'));
}

export default async function Page() {
  const content = getAssessmentContent((await getLocale()) as Locale);
  const t = await getTranslations('pages');

  // Tant que la version anglaise n'est pas rédigée (phase 5), titre provisoire.
  if (!content) {
    return (
      <PageShell route={route}>
        <PagePlaceholder title={t('assessment')} />
      </PageShell>
    );
  }

  const { intro, receive, process, scope } = content;

  return (
    <PageShell route={route}>
      <div className="wrap grid gap-8 py-16 lg:grid-cols-12 lg:gap-6 lg:py-24">
        <p className="label lg:col-span-2">{intro.label}</p>

        <div className="grid gap-12 lg:col-span-10 lg:grid-cols-2 lg:gap-x-12">
          {/* Introduction : sert de résumé au-dessus du formulaire sur mobile */}
          <div className="grid content-start gap-6">
            {/* Taille h2 : le titre partage la largeur avec le formulaire */}
            <h1 className="t-h2">{intro.title}</h1>
            {intro.paragraphs?.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 't-lead' : 'text-ink-muted'}>{paragraph}</p>
            ))}
          </div>

          {/* Formulaire : fixé sous l'en-tête sur ordinateur, tant qu'il tient dans la fenêtre */}
          <div id="demande" className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start lg:sticky lg:top-[calc(var(--header-height)+24px)]">
            <FormPlaceholder title={t('formDiagnostic')} />
          </div>

          <div className="grid content-start gap-12">
            <section className="grid gap-4" aria-labelledby="includes-title">
              <h2 id="includes-title" className="t-h3">{intro.includesTitle}</h2>
              <ul>
                {intro.items.map((item) => (
                  <li key={item.title} className="grid gap-1 border-b border-line py-4">
                    <span className="font-bold">{item.title}</span>
                    <span className="t-small text-ink-muted">{item.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-4" aria-labelledby="receive-title">
              <h2 id="receive-title" className="t-h3">{receive.title}</h2>
              <p>{receive.intro}</p>
              <ul className="bullets grid gap-1">
                {receive.items.map((entry) => <li key={entry}>{entry}</li>)}
              </ul>
            </section>

            <section className="grid gap-4" aria-labelledby="process-title">
              <h2 id="process-title" className="t-h3">{process.title}</h2>
              <ol>
                {process.steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4 border-b border-line py-4">
                    <span className="label pt-1">{String(index + 1).padStart(2, '0')}</span>
                    <span className="grid gap-1">
                      <span className="font-bold">{step.title}</span>
                      <span className="t-small text-ink-muted">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <ConditionNote label={scope.label} text={scope.text} />
            <p className="t-lead">{content.closing}</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
