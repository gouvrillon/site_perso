import React from "react";
import "./Label.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Label = ({ className, label, darkMode }) => {
  return (
    <div
      className={classnames(`Label ${className}`, {
        "Label--darkMode": darkMode,
      })}
    >
      {label}
    </div>
  );
};

Label.propTypes = {
  label: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Label;
