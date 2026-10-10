/**
 * form-placeholder.tsx — Emplacement réservé à un formulaire.
 * Les formulaires de diagnostic et de contact arrivent en phase 4 ; d'ici
 * là, ce bloc tient leur place dans la mise en page.
 */
import { getTranslations } from 'next-intl/server';

export async function FormPlaceholder({ title }: { title: string }) {
  const t = await getTranslations();

  return (
    <div className="corners grid gap-4 rounded-base bg-surface p-6 lg:p-8">
      <h2 className="t-h3">{title}</h2>
      <p className="text-ink-muted">{t('pages.formPending')}</p>
      {/* Adresse e-mail et téléphone : attendus du fondateur (PRD, section 14) */}
      <p className="t-small text-ink-muted">{t('footer.contactPending')}</p>
    </div>
  );
}
