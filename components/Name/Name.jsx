import React from "react";
import "./Name.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Name = ({ className, name, darkMode }) => {
  return (
    <div
      className={classnames(`Name ${className}`, {
        "Name--darkMode": darkMode,
      })}
    >
      {name}
    </div>
  );
};

Name.propTypes = {
  name: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Name;
