import React from "react";
import "./Button.css";
import { string, bool, func } from "prop-types";
import classnames from "classnames";

const Button = ({
  className,
  label,
  darkMode,
  reversed,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={classnames(`Button ${className}`, {
        "Button--reversed": !darkMode && reversed,
        "Button--darkMode": darkMode && !reversed,
        "Button--darkMode--reversed": darkMode && reversed,
        "Button--disabled": disabled,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: string.isRequired,
  label: string.isRequired,
  onClick: func,
  darkMode: bool,
  reversed: bool,
  className: string,
  disabled: bool,
};

export default Button;
