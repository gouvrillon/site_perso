import React from "react";
import "./City.css";
import { string, bool } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const City = ({ className, city, darkMode }) => {
  return (
    <div
      className={classnames(`City ${className}`, {
        "City--darkMode": darkMode,
      })}
    >
      <Icon icon="CITY" />
      {city}
    </div>
  );
};

City.propTypes = {
  city: string.isRequired,
  darkMode: bool,
  className: string,
};

export default City;
