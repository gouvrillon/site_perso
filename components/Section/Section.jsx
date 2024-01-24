import React from "react";
import "./Section.css";
import { node, bool } from "prop-types";
import classnames from "classnames";

const SectionContact = ({ darkMode, reversed, children }) => {
  return (
    <div
      className={classnames("Section", {
        "Section--reversed": !darkMode && reversed,
        "Section--darkMode": darkMode && !reversed,
        "Section--darkMode--reversed": darkMode && reversed,
      })}
    >
      {children}
    </div>
  );
};

SectionContact.propTypes = {
  children: node.isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SectionContact;
