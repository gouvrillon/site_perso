import React from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop.jsx";
import HeaderMobil from "../HeaderMobil/HeaderMobil.jsx";
import { func, bool, object } from "prop-types";

const Header = ({ darkMode, setDarkMode, navConst }) => {
  return (
    <>
      <HeaderDesktop
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        navConst={navConst}
      />
      <HeaderMobil
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        navConst={navConst}
      />
    </>
  );
};

Header.propTypes = {
  navConst: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default Header;
