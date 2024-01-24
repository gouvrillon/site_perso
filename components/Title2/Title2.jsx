import React from "react";
import "./Title2.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Title2 = ({ className, text, darkMode }) => {
  return (
    <h2
      className={classnames(`Title2 ${className}`, {
        "Title2--darkMode": darkMode,
      })}
    >
      {text}
    </h2>
  );
};

Title2.propTypes = {
  text: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Title2;
