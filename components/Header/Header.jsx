import React from "react";
import HeaderDesktop from "../HeaderDesktop/HeaderDesktop.jsx";
// import HeaderMobil from "../HeaderMobil/HeaderMobil.jsx";
import { func, bool } from "prop-types";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <HeaderDesktop darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <HeaderMobil darkMode={darkMode} setDarkMode={setDarkMode} /> */}
    </>
  );
};

Header.propTypes = {
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default Header;
