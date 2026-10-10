/**
 * scene.tsx — Scène du parcours, sur l'accueil : second moment fort du site.
 * Sur ordinateur, quand le navigateur le permet, la scène reste à l'écran
 * pendant le défilement : le tracé avance de station en station dans le
 * panneau, et la station courante s'éclaire dans la liste. Sinon, les
 * stations s'empilent. Aucun JavaScript : tout est piloté par le CSS.
 */
import type { VisionContent } from '@/content/types';
import { Trace } from '../glyph';
import { Stations } from './stations';

interface SceneProps extends Pick<VisionContent, 'stations' | 'note'> {
  /** Identifiant du titre de la section Vision, qui nomme la scène. */
  labelledBy: string;
}

export function Scene({ stations, note, labelledBy }: SceneProps) {
  return (
    <div className="scene wrap pb-24 lg:pb-40" role="group" aria-labelledby={labelledBy}>
      <div className="scene-sticky">
        {/* Panneau décoratif : la liste à côté porte tout le contenu. */}
        <div className="scene-panel corners" aria-hidden="true">
          <div className="scene-back" />
          <div className="scene-strip"><Trace /></div>
        </div>
        <Stations stations={stations} note={note} />
      </div>
    </div>
  );
}
