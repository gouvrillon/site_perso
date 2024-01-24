import React from "react";
import "./Link.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Link = ({ className, label, href, darkMode, isInternal, reversed }) => {
  return (
    <a
      className={classnames(`Link ${className}`, {
        "Link--reversed": !darkMode && reversed,
        "Link--darkMode": darkMode && !reversed,
        "Link--darkMode--reversed": darkMode && reversed,
      })}
      href={href}
      target={isInternal ? "" : "_blank"}
      rel="noreferrer"
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  darkMode: bool,
  isInternal: bool,
  reversed: bool,
  className: string,
};

export default Link;
