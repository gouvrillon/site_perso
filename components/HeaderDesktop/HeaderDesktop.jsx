import React from "react";
import "./HeaderDesktop.css";
import { func, bool, object } from "prop-types";
import classnames from "classnames";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";

const HeaderDesktop = ({ setDarkMode, darkMode, headerConst }) => {
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
        label={get(headerConst, "home.label", "")}
        href={get(headerConst, "home.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(headerConst, "profile.label", "")}
        href={get(headerConst, "profile.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(headerConst, "projects.label", "")}
        href={get(headerConst, "projects.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <Nav
        label={get(headerConst, "contact.label", "")}
        href={get(headerConst, "contact.href", "")}
        darkMode={darkMode}
        className="HeaderDesktop__nav"
      />
      <a
        target="_blank"
        rel="noreferrer"
        href={get(headerConst, "linkedin.href", "")}
        className={classnames("HeaderDesktop__icon", {
          "HeaderDesktop__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"LINKEDIN"} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={get(headerConst, "github.href", "")}
        className={classnames("HeaderDesktop__icon", {
          "HeaderDesktop__icon--darkMode": darkMode,
        })}
      >
        <Icon icon={"GITHUB"} />
      </a>
      <Toogle
        label="Dark mode"
        onChange={() => setDarkMode(!darkMode)}
        value={darkMode}
        darkMode={darkMode}
        className="HeaderDesktop__toogle"
      />
    </div>
  );
};

HeaderDesktop.propTypes = {
  headerConst: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderDesktop;
