import React from "react";
import { bool, object, func } from "prop-types";
import classnames from "classnames";
import "./Footer.css";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";

const Footer = ({ darkMode, nav, setDarkMode }) => {
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
          href={get(nav, "linkedin.href", "")}
          className={classnames("Footer__icon", {
            "Footer__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"LINKEDIN"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(nav, "github.href", "")}
          className={classnames("Footer__icon", {
            "Footer__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"GITHUB"} />
        </a>
      </div>
      <div className="Footer__container">
        <Nav
          label={get(nav, "home.label", "")}
          href={get(nav, "home.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(nav, "profile.label", "")}
          href={get(nav, "profile.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(nav, "projects.label", "")}
          href={get(nav, "projects.href", "")}
          darkMode={darkMode}
        />
        <Nav
          label={get(nav, "contact.label", "")}
          href={get(nav, "contact.href", "")}
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
  nav: object.isRequired,
  darkMode: bool,
};

export default Footer;
