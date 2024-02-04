import React from "react";
import "./HeaderDesktop.css";
import { func, bool, object, string } from "prop-types";
import classnames from "classnames";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

const HeaderDesktop = ({ setDarkMode, darkMode, nav, pathname }) => {
  return (
    <div
      className={classnames("HeaderDesktop", {
        "HeaderDesktop--darkMode": darkMode,
      })}
    >
      <div
        className={classnames("HeaderDesktop__logo", {
          "HeaderDesktop__logo--darkMode": darkMode,
        })}
      >
        <Icon icon={"CODE"} />
      </div>
      <Nav
        label={get(nav, "home.label", "")}
        href={get(nav, "home.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
        isSelected={isEqual(pathname, get(nav, "home.href"))}
      />
      <Nav
        label={get(nav, "profile.label", "")}
        href={get(nav, "profile.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
        isSelected={isEqual(pathname, get(nav, "profile.href"))}
      />
      <Nav
        label={get(nav, "projects.label", "")}
        href={get(nav, "projects.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
        isSelected={isEqual(pathname, get(nav, "projects.href"))}
      />
      <Nav
        label={get(nav, "contact.label", "")}
        href={get(nav, "contact.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
        isSelected={isEqual(pathname, get(nav, "contact.href"))}
      />
      <a
        target="_blank"
        rel="noreferrer"
        href={get(nav, "linkedin.href", "")}
        className={classnames("HeaderDesktop__icon", {
          "HeaderDesktop__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"LINKEDIN"} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={get(nav, "github.href", "")}
        className={classnames("HeaderDesktop__icon", {
          "HeaderDesktop__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"GITHUB"} />
      </a>
      <Toogle
        onChange={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        className="HeaderDesktop__toogle"
      />
    </div>
  );
};

HeaderDesktop.propTypes = {
  nav: object.isRequired,
  setDarkMode: func.isRequired,
  pathname: string.isRequired,
  darkMode: bool,
};

export default HeaderDesktop;
