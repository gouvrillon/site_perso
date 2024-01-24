import React from "react";
import { object, bool, string, func } from "prop-types";
import "./SectionProjectsArrow.css";
import classnames from "classnames";
import isEqual from "lodash/isEqual";

const SectionProjectsArrow = ({
  className,
  style,
  onClick,
  darkMode,
  type,
}) => {
  return (
    <div
      className={classnames(`${className} SectionProjectsArrow`, {
        "SectionProjectsArrow--darkMode": darkMode,
      })}
      style={{
        ...style,
        zIndex: "1",
        ...(isEqual(type, "PREV") && { left: "50px" }),
        ...(isEqual(type, "NEXT") && { right: "100px" }),
      }}
      onClick={onClick}
    />
  );
};

SectionProjectsArrow.propTypes = {
  type: string.isRequired,
  darkMode: bool,
  className: string,
  style: object,
  onClick: func,
};

export default SectionProjectsArrow;
