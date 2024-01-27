import React from "react";
import "./Star.css";
import { string, bool } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Star = ({ className, label, darkMode }) => {
  return (
    <div
      className={classnames(`Star ${className}`, {
        "Star--darkMode": darkMode,
      })}
    >
      <Icon icon="STAR" />
      {label}
    </div>
  );
};

Star.propTypes = {
  label: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Star;
