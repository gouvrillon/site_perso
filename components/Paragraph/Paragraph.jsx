import React from "react";
import "./Paragraph.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Paragraph = ({ className, text, darkMode }) => {
  return (
    <p
      className={classnames(`Paragraph ${className}`, {
        "Paragraph--darkMode": darkMode,
      })}
    >
      {text}
    </p>
  );
};

Paragraph.propTypes = {
  text: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Paragraph;
