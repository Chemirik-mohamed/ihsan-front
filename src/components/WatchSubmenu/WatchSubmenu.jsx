import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import styles from "./WatchSubmenu.module.css";

export function WatchSubmenu({ isActive, onClose }) {
  return (
    <div className={`${styles.submenu} ${isActive ? styles.active : ""}`}>
      <div className={styles.header}>
        <button type="button" onClick={onClose} className={styles.backButton}>
          <ChevronLeft size={20} />
          <span>Retour</span>
        </button>
      </div>

      <div className={styles.content}>
        <Link to="/montres/homme" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Homme</h3>
            <p>Collection pour homme</p>
          </div>
        </Link>

        <Link to="/montres/femme" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Femme</h3>
            <p>Collection pour femme</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
