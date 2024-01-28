import React from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop.jsx";
import HeaderMobil from "../HeaderMobil/HeaderMobil.jsx";
import { func, bool, object } from "prop-types";

const Header = ({ darkMode, setDarkMode, headerConst }) => {
  return (
    <>
      <HeaderDesktop
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        headerConst={headerConst}
      />
      <HeaderMobil
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        headerConst={headerConst}
      />
    </>
  );
};

Header.propTypes = {
  headerConst: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default Header;
