/**
 * stations.tsx — Les six stations du parcours, en mise en page empilée.
 * Liste ordonnée de six liens, toujours visibles, vers les pages solution.
 * La mise en page épinglée et son animation au défilement arrivent en phase 3.
 */
import { getLocale } from 'next-intl/server';
import type { HomeContent } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { hrefFor } from '@/lib/routes';
import { Link } from '../app-link';
import { Glyph } from '../glyph';

type VisionContent = HomeContent['vision'];

export async function Stations({ stations, note }: Pick<VisionContent, 'stations' | 'note'>) {
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <ol className="grid gap-12">
        {stations.map((station) => (
          <li key={station.id} className="grid gap-3 sm:grid-cols-[200px_1fr] sm:items-center sm:gap-x-12">
            {/* Agrandi, le trait du glyphe s'épaissit pour rester en proportion des nœuds */}
            <span className="[--gw:2.5] sm:row-span-3"><Glyph id={station.id} size={200} /></span>
            <p className="label text-accent">{station.id} — {station.name}</p>
            <h3 className="t-h3">
              <Link
                href={hrefFor({ solutionId: station.id }, locale)}
                className="transition-colors duration-(--duration-fast) hover:text-accent"
              >
                {station.title}
              </Link>
            </h3>
            <p className="max-w-[68ch] text-ink-muted">{station.text}</p>
          </li>
        ))}
      </ol>
      <p className="t-small max-w-[68ch] text-ink-muted">{note}</p>
    </>
  );
}
