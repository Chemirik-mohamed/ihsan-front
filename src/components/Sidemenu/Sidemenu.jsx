import { Link } from "react-router-dom";
import { WatchSubmenu } from "../WatchSubmenu/WatchSubmenu";
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
import { useState } from "react";

export function Sidemenu({ className = "" }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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
      hasSubmenu: true,
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

  const handleMenuClick = (item, e) => {
    if (item.hasSubmenu) {
      e.preventDefault();
      setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
    }
  };

  return (
    <>
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
                <Link
                  to={item.href}
                  className={style.linkWrapper}
                  onClick={(e) => handleMenuClick(item, e)}
                >
                  <IconComponent className={style.iconLink} size={20} />
                  <span className={style.linkText}>{item.label}</span>
                  <ChevronRight
                    size={16}
                    className={`${style.chevronIcon} ${
                      activeSubmenu === item.label ? style.rotated : ""
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={style.footer}>
          <p className={style.footerText}>Ihsan - Montres d'Exception</p>
        </div>
      </div>

      <WatchSubmenu
        isActive={activeSubmenu === "Montres"}
        onClose={() => setActiveSubmenu(null)}
      />
    </>
  );
}
