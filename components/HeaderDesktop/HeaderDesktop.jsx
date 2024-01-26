import React from "react";
import "./HeaderDesktop.css";
import { func, bool } from "prop-types";
import classnames from "classnames";
import Toogle from "../Toogle/Toogle.jsx";

const HeaderDesktop = ({ setDarkMode, darkMode }) => {
  return (
    <div
      className={classnames("HeaderDesktop", {
        "HeaderDesktop--darkMode": darkMode,
      })}
    >
      <Toogle
        label="Dark mode"
        onChange={() => setDarkMode(!darkMode)}
        value={darkMode}
        darkMode={darkMode}
      />
    </div>
  );
};

HeaderDesktop.propTypes = {
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderDesktop;
