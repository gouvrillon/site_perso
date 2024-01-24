import React from "react";
import { bool } from "prop-types";
import classnames from "classnames";
import "./Footer.css";

const Footer = ({ darkMode }) => {
  return (
    <div
      className={classnames("Footer", {
        "Footer--darkMode": darkMode,
      })}
    ></div>
  );
};

Footer.propTypes = {
  darkMode: bool,
};

export default Footer;
