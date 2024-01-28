import React from "react";
import "./Toogle.css";
import { string, bool, func } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Toogle = ({ className, onChange, darkMode }) => {
  return (
    <div
      className={classnames(`Toogle ${className}`, {
        "Toogle--darkMode": darkMode,
      })}
    >
      <div
        className={classnames("Toogle__icon", {
          "Toogle__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"SUN"} />
      </div>
      <div
        onClick={() => onChange()}
        className={classnames("Toogle__container", {
          "Toogle__container--darkMode": darkMode,
        })}
      >
        <div
          className={classnames("Toogle__circle", {
            "Toogle__circle--darkMode": darkMode,
          })}
        />
      </div>
      <div
        className={classnames("Toogle__icon", {
          "Toogle__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"MOON"} />
      </div>
    </div>
  );
};

Toogle.propTypes = {
  onChange: func.isRequired,
  darkMode: bool,
  className: string,
};

export default Toogle;
