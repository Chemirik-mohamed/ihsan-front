import styles from "./NavDropdown.module.css";

export function NavDropdown({ dropdownMenu, onMouseEnter, onMouseLeave }) {
  if (!dropdownMenu) return null;

  return (
    <div
      className={styles.navDropdownFull}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.content}>
        {dropdownMenu === "montres" && (
          <div>
            <h3>Nos Montres</h3>
            <p>Découvrez notre collection de montres d'exception</p>
          </div>
        )}
        {dropdownMenu === "accueil" && (
          <div>
            <h3>Bienvenue chez Ihsan</h3>
            <p>Votre destination pour les montres de luxe</p>
          </div>
        )}
        {dropdownMenu === "collections" && (
          <div>
            <h3>Nos Collections</h3>
            <p>Explorez nos différentes gammes de montres</p>
          </div>
        )}
      </div>
    </div>
  );
}
