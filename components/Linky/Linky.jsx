import React from "react";
import "./Linky.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Linky = ({ className, label, href, darkMode, reversed, isExternal }) => {
  return (
    <a
      className={classnames(`Linky ${className}`, {
        "Linky--reversed": !darkMode && reversed,
        "Linky--darkMode": darkMode && !reversed,
        "Linky--darkMode--reversed": darkMode && reversed,
      })}
      href={href}
      target={isExternal ? "_blank" : null}
      rel={isExternal ? "noreferrer" : null}
    >
      {label}
    </a>
  );
};

Linky.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  isExternal: bool,
  darkMode: bool,
  reversed: bool,
  className: string,
};

export default Linky;
