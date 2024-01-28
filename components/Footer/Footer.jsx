import React from "react";
import { bool, object, func } from "prop-types";
import classnames from "classnames";
import "./Footer.css";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";

const Footer = ({ darkMode, navConst, setDarkMode }) => {
  return (
    <div
      className={classnames("Footer", {
        "Footer--darkMode": darkMode,
      })}
    >
      <div className="Footer__container Footer__container_icons">
        <a
          className={classnames("Footer__logo", {
            "Footer__logo--darkMode": darkMode,
          })}
        >
          <Icon icon={"CODE"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "linkedin.href", "")}
          className={classnames("Footer__icon", {
            "Footer__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"LINKEDIN"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "github.href", "")}
          className={classnames("Footer__icon", {
            "Footer__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"GITHUB"} />
        </a>
      </div>
      <div className="Footer__container">
        <Nav
          label={get(navConst, "home.label", "")}
          href={get(navConst, "home.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(navConst, "profile.label", "")}
          href={get(navConst, "profile.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(navConst, "projects.label", "")}
          href={get(navConst, "projects.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(navConst, "contact.label", "")}
          href={get(navConst, "contact.href", "")}
          darkMode={darkMode}
        />
      </div>

      <div className="Footer__container">
        <Toogle
          onChange={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          className="Footer__toogle"
        />
        <div
          className={classnames("Footer__sign", {
            "Footer__sign--darkMode": darkMode,
          })}
        >
          Thomas Gouvrillon
        </div>
        <div
          className={classnames("Footer__sign", {
            "Footer__sign--darkMode": darkMode,
          })}
        >
          2024
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  setDarkMode: func.isRequired,
  navConst: object.isRequired,
  darkMode: bool,
};

export default Footer;
