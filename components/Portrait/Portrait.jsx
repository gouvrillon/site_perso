import React from "react";
import "./Portrait.css";
import { string, bool } from "prop-types";
import classnames from "classnames";

const Portrait = ({ className, darkMode }) => {
  return (
    <div className={`Portrait ${className}`}>
      <div
        className="Portrait__image"
        style={{ backgroundImage: 'url("/images/ME.jpeg")' }}
      ></div>
      <div
        className={classnames("Portrait__slide1", {
          "Portrait__slide1--darkMode": darkMode,
        })}
      />
      <div
        className={classnames("Portrait__slide2", {
          "Portrait__slide2--darkMode": darkMode,
        })}
      />
    </div>
  );
};

Portrait.propTypes = {
  darkMode: bool,
  className: string,
};

export default Portrait;
