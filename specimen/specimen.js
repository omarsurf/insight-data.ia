/*
 * specimen.js — Comportements de la page spécimen (phase 0).
 * Trois rôles seulement : repli des entrées à l'écran, position du pointeur
 * (inclinaison du hero, lampe d'inspection des cartes) et ouverture du
 * panneau Solutions. Chargé dans <head> pour poser la classe « io » avant
 * le premier affichage ; le reste attend que la page soit analysée.
 */
(() => {
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cssScroll = CSS.supports('animation-timeline: view()');

  // Le repli ne masque le contenu que si ce script tourne (règle M5).
  const useObserver = !reduced && !cssScroll;
  if (useObserver) root.classList.add('io');

  /** Révèle chaque élément .reveal ou .draw à sa première entrée à l'écran. */
  function observeEntries() {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.reveal, .draw').forEach((el) => observer.observe(el));
  }

  /**
   * Transmet la position du pointeur à un élément par deux variables CSS,
   * au plus une fois par image.
   * @param {HTMLElement} el Élément suivi.
   * @param {(x: number, y: number, rect: DOMRect) => [string, string]} toValues
   *   Convertit la position (en pixels, relative à l'élément) en deux valeurs CSS.
   * @param {[string, string]} names Noms des deux variables CSS.
   */
  function trackPointer(el, toValues, names) {
    let frame = 0;
    el.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const [a, b] = toValues(event.clientX - rect.left, event.clientY - rect.top, rect);
        el.style.setProperty(names[0], a);
        el.style.setProperty(names[1], b);
      });
    });
  }

  /** Incline les plans du hero selon le pointeur, de -1 à 1 sur chaque axe. */
  function initHeroTilt() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    trackPointer(hero, (x, y, r) => [
      ((x / r.width) * 2 - 1).toFixed(3),
      ((y / r.height) * 2 - 1).toFixed(3),
    ], ['--px', '--py']);
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--px', '0');
      hero.style.setProperty('--py', '0');
    });
  }

  /** Fait suivre le pointeur par le segment éclairé de la bordure des cartes. */
  function initLamp() {
    document.querySelectorAll('.card').forEach((card) => {
      trackPointer(card, (x, y) => [`${x}px`, `${y}px`], ['--mx', '--my']);
    });
  }

  /** Ouvre et ferme le panneau Solutions : clic, second clic, Échap, clic extérieur. */
  function initPanel() {
    const button = document.querySelector('[aria-controls="panel-solutions"]');
    const panel = document.getElementById('panel-solutions');
    if (!button || !panel) return;

    const setOpen = (open) => {
      button.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    };
    button.addEventListener('click', () => setOpen(panel.hidden));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) { setOpen(false); button.focus(); }
    });
    document.addEventListener('click', (event) => {
      if (!panel.hidden && !panel.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (useObserver) observeEntries();
    if (!reduced && matchMedia('(pointer: fine)').matches) { initHeroTilt(); initLamp(); }
    initPanel();
  });
})();
