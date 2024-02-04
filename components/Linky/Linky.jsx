import React from "react";
import "./Linky.css";
import { string, bool } from "prop-types";
import classnames from "classnames";
import Link from "next/link";

const Linky = ({ className, label, href, darkMode, reversed }) => {
  return (
    <Link
      className={classnames(`Linky ${className}`, {
        "Linky--reversed": !darkMode && reversed,
        "Linky--darkMode": darkMode && !reversed,
        "Linky--darkMode--reversed": darkMode && reversed,
      })}
      href={href}
    >
      {label}
    </Link>
  );
};

Linky.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  darkMode: bool,
  reversed: bool,
  className: string,
};

export default Linky;
