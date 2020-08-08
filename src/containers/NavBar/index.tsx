import React, { useState } from "react";
import classNames from "classnames";

import "./Nav.scss";

import NavLinks from "../../components/NavLinks";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggle = (): void => {
    setToggleMenu((prevTog) => !prevTog);
  };

  const menuClass = classNames({
    menu: true,
    "menu--show": toggleMenu,
  });

  return (
    <nav>
      <div className="nav">
        <img
          src="https://fullstackopen.com/static/integrify-db3c3a5e8175654f9f5c8c5dbf815ba7.svg"
          alt="integrify logo"
          className="nav__logo"
        />
        <NavLinks type={"nav__links"} />

        <i className="fa fa-bars nav__menu--icon" onClick={menuToggle} />
      </div>

      {/* Mobile menu */}
      <div
        id="responsive--menu"
        className={menuClass}
        aria-label="Navigation menu list"
      >
        <NavLinks />
      </div>
    </nav>
  );
}

NavBar.displayName = "Navigation Bar";
