/**
 * page-placeholder.tsx — Contenu provisoire d'une page en phase 1.
 * Affiche le titre de la page dans la mise en page du site : étiquette dans
 * la marge technique, titre et mention. Remplacé page par page en phase 2.
 */
import { getTranslations } from 'next-intl/server';

interface PagePlaceholderProps {
  /** Étiquette mono de la marge technique : le numéro du domaine, s'il y en a un. */
  label?: string;
  title: string;
}

export async function PagePlaceholder({ label, title }: PagePlaceholderProps) {
  const t = await getTranslations('pages');

  return (
    <section className="wrap grid gap-6 py-24 lg:grid-cols-12 lg:py-40">
      <span className="label lg:col-span-2">{label}</span>
      <div className="grid gap-6 lg:col-span-10">
        <h1 className="t-h1">{title}</h1>
        <p className="t-lead max-w-[68ch] text-ink-muted">{t('pending')}</p>
      </div>
    </section>
  );
}
