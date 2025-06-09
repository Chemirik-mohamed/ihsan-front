import { Globe, MapPin, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoIhsan from "../../assets/logo/ihsan-logo-5.svg";
import { useScrollbarFix } from "../../hooks/useScrollbarFix";
import { Sidemenu } from "../Sidemenu/Sidemenu";
import { NavDropdown } from "../NavDropdown/NavDropdown";
import stylesNavbar from "./Navbar.module.css";

export function Navbar() {
  const [isSidemenuOpen, setSidemenuOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(null);

  // Utilise le hook pour gérer le décalage de la scrollbar
  useScrollbarFix(isSidemenuOpen);

  // Ouvre/ferme le menu latéral
  const handleClick = () => {
    setSidemenuOpen((prev) => !prev);
  };

  const navItems = [
    { id: "montres", label: "Montres", path: "/montres" },
    { id: "accueil", label: "Accueil", path: "/" },
    { id: "collections", label: "Collections", path: "/collections" },
  ];

  return (
    <div>
      <nav className={stylesNavbar.navbar}>
        {/* Barre supérieure */}
        <div className={stylesNavbar.topBar}>
          <div className={stylesNavbar.menu}>
            <button
              type="button"
              onClick={handleClick}
              className={stylesNavbar.btn}
              aria-label="Ouvrir le menu"
            >
              <Menu className={stylesNavbar.icon} />
            </button>
            <Globe className={stylesNavbar.icon} />
          </div>
          <div className={stylesNavbar.logoContainer}>
            <Link to="/">
              <img
                src={logoIhsan}
                alt="logo Ihsan"
                className={stylesNavbar.logoIhsan}
              />
            </Link>
          </div>
          <div className={stylesNavbar.navLinksRight}>
            <Search className={stylesNavbar.icon} />
            <MapPin className={stylesNavbar.icon} />
            <User className={stylesNavbar.icon} />
          </div>
        </div>

        {/* Barre inférieure */}
        <div className={stylesNavbar.bottomBar}>
          <ul className={stylesNavbar.navLinksCenter}>
            {navItems.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => setDropdownMenu(item.id)}
                onMouseLeave={() => setDropdownMenu(null)}
                className={stylesNavbar.navItem}
              >
                <Link to={item.path} className={stylesNavbar.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Drop-down pleine largeur */}
          <NavDropdown
            dropdownMenu={dropdownMenu}
            onMouseEnter={() => setDropdownMenu(dropdownMenu)}
            onMouseLeave={() => setDropdownMenu(null)}
          />
        </div>
      </nav>

      {/* Menu latéral */}
      <Sidemenu className={isSidemenuOpen ? stylesNavbar.open : ""} />
    </div>
  );
}
