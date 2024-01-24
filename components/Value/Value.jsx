import React from "react";
import "./Value.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Value = ({ label, darkMode, className }) => {
  return (
    <div className={`Value ${className}`}>
      <div
        className={classnames("Value__point", {
          "Value__point--darkMode": darkMode,
        })}
      />
      <div
        className={classnames("Value__label", {
          "Value__label--darkMode": darkMode,
        })}
      >
        {label}
      </div>
    </div>
  );
};

Value.propTypes = {
  label: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Value;
