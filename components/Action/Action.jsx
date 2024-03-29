import React from "react";
import "./Action.css";
import { string, bool } from "prop-types";
import classnames from "classnames";
import Label from "../Label/Label.jsx";

const Action = ({ className, label, href, darkMode, image }) => {
  return (
    <a
      className={classnames(`Action ${className}`, {
        "Action--darkMode": darkMode,
      })}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={image}
        className={classnames(`Action__image`, {
          "Action__image--darkMode": darkMode,
        })}
      />
      <Label label={label} darkMode={darkMode} className="Action__label" />
    </a>
  );
};

Action.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  image: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Action;
