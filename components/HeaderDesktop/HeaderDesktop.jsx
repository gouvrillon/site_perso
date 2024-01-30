import React from "react";
import "./HeaderDesktop.css";
import { func, bool, object } from "prop-types";
import classnames from "classnames";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";

const HeaderDesktop = ({ setDarkMode, darkMode, nav }) => {
  return (
    <div
      className={classnames("HeaderDesktop", {
        "HeaderDesktop--darkMode": darkMode,
      })}
    >
      <a
        className={classnames("HeaderDesktop__logo", {
          "HeaderDesktop__logo--darkMode": darkMode,
        })}
      >
        <Icon icon={"CODE"} />
      </a>
      <Nav
        label={get(nav, "home.label", "")}
        href={get(nav, "home.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(nav, "profile.label", "")}
        href={get(nav, "profile.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(nav, "projects.label", "")}
        href={get(nav, "projects.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(nav, "contact.label", "")}
        href={get(nav, "contact.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
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
  darkMode: bool,
};

export default HeaderDesktop;
