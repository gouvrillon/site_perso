import React from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop.jsx";
import HeaderMobil from "../HeaderMobil/HeaderMobil.jsx";
import { func, bool, object, string } from "prop-types";

const Header = ({ darkMode, setDarkMode, nav, pathname }) => {
  return (
    <>
      <HeaderDesktop
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
        pathname={pathname}
      />
      <HeaderMobil
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
        pathname={pathname}
      />
    </>
  );
};

Header.propTypes = {
  nav: object.isRequired,
  setDarkMode: func.isRequired,
  pathname: string.isRequired,
  darkMode: bool,
};

export default Header;
