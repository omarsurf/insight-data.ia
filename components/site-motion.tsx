'use client';

/**
 * site-motion.tsx — Le seul script d'animation du site.
 * Deux rôles : le repli des entrées à l'écran pour les navigateurs sans
 * animations CSS au défilement, et la position du pointeur pour
 * l'inclinaison du hero et la lampe d'inspection des cartes. Ne rend rien.
 */
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Révèle chaque élément .reveal ou .draw à sa première entrée à l'écran.
 * Seuls les éléments encore hors de l'écran sont masqués : rien de visible
 * ne disparaît au chargement du script.
 * @returns La fonction qui arrête l'observation.
 */
function observeEntries(): () => void {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const kind = entry.target.classList.contains('draw') ? 'draw' : 'reveal';
      entry.target.classList.replace(`${kind}-pending`, `${kind}-in`);
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.reveal, .draw').forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add(element.classList.contains('draw') ? 'draw-pending' : 'reveal-pending');
    observer.observe(element);
  });

  return () => observer.disconnect();
}

/**
 * Transmet la position du pointeur par des variables CSS, au plus une fois
 * par image : --px et --py (de -1 à 1) à l'élément [data-tilt] survolé,
 * --mx et --my (en pixels) à la carte survolée.
 * @returns La fonction qui retire l'écouteur.
 */
function trackPointer(): () => void {
  let frame = 0;
  let tilted: HTMLElement | null = null;

  const onMove = (event: PointerEvent) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const target = event.target instanceof Element ? event.target : null;

      const tilt = target?.closest<HTMLElement>('[data-tilt]') ?? null;
      if (tilted && tilted !== tilt) {
        tilted.style.setProperty('--px', '0');
        tilted.style.setProperty('--py', '0');
      }
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        tilt.style.setProperty('--px', (((event.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3));
        tilt.style.setProperty('--py', (((event.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3));
      }
      tilted = tilt;

      const card = target?.closest<HTMLElement>('.card');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      }
    });
  };

  document.addEventListener('pointermove', onMove, { passive: true });
  return () => {
    document.removeEventListener('pointermove', onMove);
    cancelAnimationFrame(frame);
  };
}

export function SiteMotion() {
  // Relancé à chaque changement de page, pour observer les nouveaux éléments.
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cleanups: (() => void)[] = [];
    if (!CSS.supports('animation-timeline: view()')) cleanups.push(observeEntries());
    if (matchMedia('(pointer: fine)').matches) cleanups.push(trackPointer());
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [pathname]);

  return null;
}
