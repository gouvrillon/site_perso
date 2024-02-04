import React from "react";
import { bool, object, func, string } from "prop-types";
import classnames from "classnames";
import "./Footer.css";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

const Footer = ({ darkMode, nav, setDarkMode, pathname }) => {
  return (
    <div
      className={classnames("Footer", {
        "Footer--darkMode": darkMode,
      })}
    >
      <div className="Footer__container Footer__container_icons">
        <div
          className={classnames("Footer__logo", {
            "Footer__logo--darkMode": darkMode,
          })}
        >
          <Icon icon={"CODE"} />
        </div>
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
          isSelected={isEqual(pathname, get(nav, "home.href"))}
        />
        <Nav
          label={get(nav, "profile.label", "")}
          href={get(nav, "profile.href", "")}
          darkMode={darkMode}
          isSelected={isEqual(pathname, get(nav, "profile.href"))}
        />
        <Nav
          label={get(nav, "projects.label", "")}
          href={get(nav, "projects.href", "")}
          darkMode={darkMode}
          isSelected={isEqual(pathname, get(nav, "projects.href"))}
        />
        <Nav
          label={get(nav, "contact.label", "")}
          href={get(nav, "contact.href", "")}
          darkMode={darkMode}
          isSelected={isEqual(pathname, get(nav, "contact.href"))}
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
  pathname: string.isRequired,
  darkMode: bool,
};

export default Footer;
