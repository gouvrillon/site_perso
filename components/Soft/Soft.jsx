import React from "react";
import "./Soft.css";
import { string, bool } from "prop-types";
import { SOFT_CONST } from "./SoftConst.js";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Soft = ({ name, darkMode, className }) => {
  const soft = SOFT_CONST.find((soft) => isEqual(get(soft, "name"), name));
  return (
    <div className={`Soft ${className}`}>
      <div
        className={classnames("Soft__icon", {
          "Soft__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={get(soft, "icon", "")} />
      </div>
      <div
        className={classnames("Soft__label", {
          "Soft__label--darkMode": darkMode,
        })}
      >
        {get(soft, "label", "")}
      </div>
    </div>
  );
};

Soft.propTypes = {
  name: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Soft;
