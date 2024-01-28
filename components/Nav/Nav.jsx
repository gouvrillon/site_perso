import React from "react";
import "./Nav.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Nav = ({ className, label, href, darkMode }) => {
  return (
    <a
      href={href}
      className={classnames(`Nav ${className}`, {
        "Nav--darkMode": darkMode,
      })}
    >
      {label}
    </a>
  );
};

Nav.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Nav;
