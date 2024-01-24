import React from "react";
import "./HeaderDesktop.css";
import { func, bool } from "prop-types";
import classnames from "classnames";

const HeaderDesktop = ({ setDarkMode, darkMode }) => {
  return (
    <div
      className={classnames("HeaderDesktop", {
        "HeaderDesktop--darkMode": darkMode,
      })}
    >
      <input
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

HeaderDesktop.propTypes = {
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderDesktop;
