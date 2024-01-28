import React from "react";
import "./HeaderDesktop.css";
import { func, bool, object } from "prop-types";
import classnames from "classnames";
import Toogle from "../Toogle/Toogle.jsx";
import Icon from "../Icon/Icon.jsx";
import Nav from "../Nav/Nav.jsx";
import get from "lodash/get";

const HeaderDesktop = ({ setDarkMode, darkMode, navConst }) => {
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
      <Toogle
        onChange={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        className="HeaderDesktop__toogle"
      />
    </div>
  );
};

HeaderDesktop.propTypes = {
  navConst: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderDesktop;
