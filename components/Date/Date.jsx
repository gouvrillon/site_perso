import React from "react";
import "./Date.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Date = ({ className, date, darkMode }) => {
  return (
    <div
      className={classnames(`Date ${className}`, {
        "Date--darkMode": darkMode,
      })}
    >
      {date}
    </div>
  );
};

Date.propTypes = {
  date: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Date;
