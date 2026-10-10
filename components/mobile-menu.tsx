'use client';

/**
 * mobile-menu.tsx — Menu plein écran des écrans de moins de 1024 px.
 * S'appuie sur l'élément <dialog> natif : il retient le focus, se ferme
 * par Échap et rend le focus au bouton. Composant client, pour l'ouvrir.
 */
import { useRef, type ReactNode } from 'react';
import { CloseIcon, MenuIcon } from './icons';

interface MobileMenuProps {
  openLabel: string;
  closeLabel: string;
  /** En-tête du menu (logo), rendu côté serveur. */
  brand: ReactNode;
  /** Liens et sélecteur de langue, rendus côté serveur. */
  children: ReactNode;
}

export function MobileMenu({ openLabel, closeLabel, brand, children }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-base lg:hidden"
        aria-label={openLabel}
        onClick={() => dialogRef.current?.showModal()}
      >
        <MenuIcon size={24} />
      </button>

      {/* Un clic sur un lien ferme le menu avant la navigation. */}
      <dialog
        ref={dialogRef}
        className="mobile-menu"
        aria-label={openLabel}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest('a')) dialogRef.current?.close();
        }}
      >
        <div className="flex h-(--header-height) items-center justify-between border-b border-line bg-canvas px-5">
          {brand}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-base"
            aria-label={closeLabel}
            onClick={() => dialogRef.current?.close()}
          >
            <CloseIcon size={24} />
          </button>
        </div>
        <div className="px-5 py-6">{children}</div>
      </dialog>
    </>
  );
}
