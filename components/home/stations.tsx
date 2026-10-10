/**
 * stations.tsx — Les six stations du parcours.
 * Liste ordonnée de six liens, toujours visibles, vers les pages solution.
 * Mise en page empilée par défaut (page À propos, mobile, repli) ; placée
 * dans la scène de l'accueil, la même liste passe en mise en page épinglée
 * par le seul CSS (voir scene.tsx et globals.css).
 */
import type { CSSProperties } from 'react';
import { getLocale } from 'next-intl/server';
import type { VisionContent } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { hrefFor } from '@/lib/routes';
import { Link } from '../app-link';
import { Glyph } from '../glyph';

export async function Stations({ stations, note }: Pick<VisionContent, 'stations' | 'note'>) {
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <ol className="scene-list">
        {stations.map((station, index) => (
          // --i : rang de la station, lu par les animations de la scène épinglée.
          <li key={station.id} className="scene-item" style={{ '--i': index } as CSSProperties}>
            <span className="scene-glyph"><Glyph id={station.id} size={200} draw /></span>
            <div className="scene-head">
              <span className="scene-mark" aria-hidden="true" />
              <p className="label scene-num">{station.id} — {station.name}</p>
              <h3 className="t-h3">
                <Link href={hrefFor({ solutionId: station.id }, locale)} className="scene-link">{station.title}</Link>
              </h3>
            </div>
            <p className="scene-desc">{station.text}</p>
          </li>
        ))}
      </ol>
      <p className="scene-note">{note}</p>
    </>
  );
}
