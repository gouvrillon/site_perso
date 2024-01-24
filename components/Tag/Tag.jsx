import React from "react";
import "./Tag.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Tag = ({ className, label, darkMode }) => {
  return (
    <div
      className={classnames(`Tag ${className}`, {
        "Tag--darkMode": darkMode,
      })}
    >
      {`#${label}`}
    </div>
  );
};

Tag.propTypes = {
  label: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Tag;
