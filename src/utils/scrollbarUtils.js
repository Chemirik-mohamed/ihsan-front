/**
 * Utilitaires pour gérer les problèmes de scrollbar lors de l'ouverture de modales/menus
 */

/**
 * Calcule la largeur de la scrollbar
 * @returns {number} Largeur de la scrollbar en pixels
 */
export function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

/**
 * Empêche le scroll et applique un padding pour éviter le décalage
 * @param {string} bodyClass - Classe CSS à ajouter au body
 */
export function disableScroll(bodyClass = "no-scroll") {
  const scrollBarWidth = getScrollbarWidth();
  document.body.classList.add(bodyClass);
  document.body.style.paddingRight = `${scrollBarWidth}px`;
}

/**
 * Restaure le scroll et retire le padding
 * @param {string} bodyClass - Classe CSS à retirer du body
 */
export function enableScroll(bodyClass = "no-scroll") {
  document.body.classList.remove(bodyClass);
  document.body.style.paddingRight = "";
}

/**
 * Toggle le scroll avec gestion automatique du padding
 * @param {boolean} shouldDisable - True pour désactiver, false pour activer
 * @param {string} bodyClass - Classe CSS à utiliser
 */
export function toggleScroll(shouldDisable, bodyClass = "no-scroll") {
  if (shouldDisable) {
    disableScroll(bodyClass);
  } else {
    enableScroll(bodyClass);
  }
}
