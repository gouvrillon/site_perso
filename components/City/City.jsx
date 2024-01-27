import React from "react";
import "./City.css";
import { string, bool } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const City = ({ className, city, darkMode }) => {
  return (
    <div className={`City ${className}`}>
      <div
        className={classnames("City__icon", {
          "City__icon--darkMode": darkMode,
        })}
      >
        <Icon icon="CITY" />
      </div>
      <div
        className={classnames("City__label", {
          "City__label--darkMode": darkMode,
        })}
      >
        {city}
      </div>
    </div>
  );
};

City.propTypes = {
  city: string.isRequired,
  darkMode: bool,
  className: string,
};

export default City;
