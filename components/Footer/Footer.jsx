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
      <div className="Footer__container__logo">
        <a
          className={classnames("HeaderDesktop__logo", {
            "HeaderDesktop__logo--darkMode": darkMode,
          })}
        >
          <Icon icon={"CODE"} />
        </a>
      </div>
      <div className="Footer__container__navs">
        <Nav
          label={get(navConst, "home.label", "")}
          href={get(navConst, "home.href", "")}
          darkMode={darkMode}
          className="HeaderDesktop__nav"
        />
        <Nav
          label={get(navConst, "profile.label", "")}
          href={get(navConst, "profile.href", "")}
          darkMode={darkMode}
          className="HeaderDesktop__nav"
        />
        <Nav
          label={get(navConst, "projects.label", "")}
          href={get(navConst, "projects.href", "")}
          darkMode={darkMode}
          className="HeaderDesktop__nav"
        />
        <Nav
          label={get(navConst, "contact.label", "")}
          href={get(navConst, "contact.href", "")}
          darkMode={darkMode}
          className="HeaderDesktop__nav"
        />
      </div>
      <div className="Footer__container__icons">
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "linkedin.href", "")}
          className={classnames("HeaderDesktop__icon", {
            "HeaderDesktop__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"LINKEDIN"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "github.href", "")}
          className={classnames("HeaderDesktop__icon", {
            "HeaderDesktop__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"GITHUB"} />
        </a>
      </div>
      <div className="Footer__container__toogle">
        <Toogle
          label="Dark mode"
          onChange={() => setDarkMode(!darkMode)}
          value={darkMode}
          darkMode={darkMode}
          className="HeaderDesktop__toogle"
        />
      </div>
      <div className="Footer__container__sign"></div>
    </div>
  );
};

Footer.propTypes = {
  setDarkMode: func.isRequired,
  navConst: object.isRequired,
  darkMode: bool,
};

export default Footer;
