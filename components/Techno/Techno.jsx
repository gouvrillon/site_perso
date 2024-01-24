import React from "react";
import "./Techno.css";
import { string, bool } from "prop-types";
import { TECHNO_CONST } from "./TechnoConst.js";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Techno = ({ name, darkMode, reversed, className }) => {
  const techno = TECHNO_CONST.find((techno) =>
    isEqual(get(techno, "name"), name)
  );
  return (
    <div
      className={classnames(`Techno ${className}`, {
        "Techno--reversed": reversed && !darkMode,
        "Techno--darkMode": !reversed && darkMode,
        "Techno--darkMode--reversed": reversed && darkMode,
      })}
    >
      <div
        className="Techno__point"
        style={{ background: get(techno, "color", "") }}
      ></div>
      <div
        className={classnames("Techno__icon", {
          "Techno__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={get(techno, "name", "")} />
      </div>
      <div
        className={classnames("Techno__name", {
          "Techno__name--darkMode": darkMode,
        })}
      >
        {get(techno, "label", "")}
      </div>
    </div>
  );
};

Techno.propTypes = {
  name: string.isRequired,
  darkMode: bool,
  reversed: bool,
  className: string,
};

export default Techno;
