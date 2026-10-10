/**
 * proxy.ts — Redirection de langue et traduction des chemins.
 * Redirige « / » vers la langue du navigateur et fait correspondre les
 * chemins traduits (/fr/secteurs) aux routes internes (/industries).
 */
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Tout sauf les fichiers statiques et les routes techniques.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
