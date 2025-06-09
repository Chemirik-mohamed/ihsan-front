import { Link } from "react-router-dom";
import style from "./Sidemenu.module.css";
import logoIhsan from "../../assets/logo/ihsan-logo-5.svg";
import {
  Watch,
  Home,
  Star,
  Mail,
  Info,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

export function Sidemenu({ className = "" }) {
  const menuItems = [
    {
      icon: Home,
      label: "Accueil",
      href: "/",
    },
    {
      icon: Watch,
      label: "Montres",
      href: "/montres",
    },
    {
      icon: Star,
      label: "Collections",
      href: "/collections",
    },
    {
      icon: ShoppingBag,
      label: "Boutique",
      href: "/boutique",
    },
    {
      icon: Info,
      label: "À Propos",
      href: "/about",
    },
    {
      icon: Mail,
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className={`${style.sidemenu} ${className}`}>
      <div className={style.header}>
        <Link to="/">
          <img src={logoIhsan} alt="logo Ihsan" className={style.logoIhsan} />
        </Link>
      </div>
      <ul className={style.sidemenuLinks}>
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <li key={item.label} className={style.sidemenuLink}>
              <Link to={item.href} className={style.linkWrapper}>
                <IconComponent className={style.iconLink} size={20} />
                <span className={style.linkText}>{item.label}</span>
                <ChevronRight size={16} className={style.chevronIcon} />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={style.footer}>
        <p className={style.footerText}>Ihsan - Montres d'Exception</p>
      </div>
    </div>
  );
}
