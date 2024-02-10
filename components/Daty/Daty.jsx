import React from "react";
import "./Daty.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Daty = ({ className, date, darkMode }) => {
  return (
    <div
      className={classnames(`Daty ${className}`, {
        "Daty--darkMode": darkMode,
      })}
    >
      {date}
    </div>
  );
};

Daty.propTypes = {
  date: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Daty;
