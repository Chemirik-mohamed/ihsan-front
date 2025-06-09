import videoBg from "../../assets/video/watch.mp4";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.main}>
      <video autoPlay loop muted className={styles.bgVideo}>
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
    </div>
  );
}
