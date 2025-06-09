import { useEffect } from "react";

/**
 * Hook personnalisé pour gérer le décalage visuel causé par la disparition de la scrollbar
 * lors de l'ouverture de modales, menus latéraux, etc.
 *
 * @param {boolean} isOpen - État d'ouverture de l'élément (modal, menu, etc.)
 * @param {string} [bodyClass='no-scroll'] - Classe CSS à ajouter au body
 */
export function useScrollbarFix(isOpen, bodyClass = "no-scroll") {
  useEffect(() => {
    if (isOpen) {
      // Calcule la largeur de la scrollbar
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Ajoute la classe et le padding pour éviter le décalage
      document.body.classList.add(bodyClass);
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      // Restaure l'état initial
      document.body.classList.remove(bodyClass);
      document.body.style.paddingRight = "";
    }

    // Nettoyage lors du démontage du composant
    return () => {
      document.body.classList.remove(bodyClass);
      document.body.style.paddingRight = "";
    };
  }, [isOpen, bodyClass]);
}
