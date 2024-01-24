import React from "react";
import "./Title1.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Title1 = ({ className, text, darkMode }) => {
  return (
    <h1
      className={classnames(`Title1 ${className}`, {
        "Title1--darkMode": darkMode,
      })}
    >
      {text}
    </h1>
  );
};

Title1.propTypes = {
  text: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Title1;
