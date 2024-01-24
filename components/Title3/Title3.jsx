import React from "react";
import "./Title3.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Title3 = ({ className, text, darkMode }) => {
  return (
    <h3
      className={classnames(`Title3 ${className}`, {
        "Title3--darkMode": darkMode,
      })}
    >
      {text}
    </h3>
  );
};

Title3.propTypes = {
  text: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Title3;
