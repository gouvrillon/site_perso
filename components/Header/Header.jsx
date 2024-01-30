import React from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop.jsx";
import HeaderMobil from "../HeaderMobil/HeaderMobil.jsx";
import { func, bool, object } from "prop-types";

const Header = ({ darkMode, setDarkMode, nav }) => {
  return (
    <>
      <HeaderDesktop
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
      />
      <HeaderMobil
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
      />
    </>
  );
};

Header.propTypes = {
  nav: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default Header;
