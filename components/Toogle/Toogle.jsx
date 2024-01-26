import React from "react";
import "./Toogle.css";
import { string, bool, func } from "prop-types";
import classnames from "classnames";

const Toogle = ({ className, label, onChange, darkMode }) => {
  return (
    <div
      className={classnames(`Toogle ${className}`, {
        "Toogle--darkMode": darkMode,
      })}
    >
      <div
        onClick={() => onChange()}
        className={classnames(`Toogle__container ${className}`, {
          "Toogle__container--darkMode": darkMode,
        })}
      >
        <div
          className={classnames(`Toogle__circle ${className}`, {
            "Toogle__circle--darkMode": darkMode,
          })}
        />
      </div>
      <div
        className={classnames(`Toogle__label ${className}`, {
          "Toogle__label--darkMode": darkMode,
        })}
      >
        {label}
      </div>
    </div>
  );
};

Toogle.propTypes = {
  label: string.isRequired,
  onChange: func.isRequired,
  darkMode: bool,
  className: string,
};

export default Toogle;
