import React, { useState } from "react";
import classnames from "classnames";
import "./HeaderMobil.css";
import Icon from "../Icon/Icon.jsx";
import { func, bool } from "prop-types";

const HeaderMobil = ({ darkMode, setDarkMode }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div
      className={classnames("HeaderMobil", {
        "HeaderMobil--displayMenu": displayMenu,
        "HeaderMobil--darkMode": darkMode,
      })}
    >
      <div onClick={() => setDisplayMenu(!displayMenu)}>
        {displayMenu ? <Icon icon="CROSS" /> : <Icon icon="HAMBURGER" />}
      </div>
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

HeaderMobil.propTypes = {
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderMobil;
