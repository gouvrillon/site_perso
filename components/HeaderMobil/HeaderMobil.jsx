import React, { useState } from "react";
import classnames from "classnames";
import "./HeaderMobil.css";
import Icon from "../Icon/Icon.jsx";
import Toogle from "../Toogle/Toogle.jsx";
import Nav from "../Nav/Nav.jsx";
import { func, bool, object, string } from "prop-types";
import get from "lodash/get";
import isEqual from "lodash/isEqual";

const HeaderMobil = ({ darkMode, setDarkMode, nav, pathname }) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <div
      className={classnames("HeaderMobil", {
        "HeaderMobil--displayMenu": displayMenu,
        "HeaderMobil--darkMode": darkMode,
      })}
    >
      <div
        onClick={() => setDisplayMenu(!displayMenu)}
        className={classnames("HeaderMobil__hamburger", {
          "HeaderMobil__hamburger--darkMode": darkMode,
        })}
      >
        {displayMenu ? <Icon icon="CROSS" /> : <Icon icon="HAMBURGER" />}
      </div>
      <div
        className={classnames("HeaderMobil__navs", {
          "HeaderMobil__navs--displayMenu": displayMenu,
        })}
      >
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
      <div
        className={classnames("HeaderMobil__icons", {
          "HeaderMobil__icons--displayMenu": displayMenu,
        })}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={get(nav, "linkedin.href", "")}
          className={classnames("HeaderMobil__icon", {
            "HeaderMobil__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"LINKEDIN"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(nav, "github.href", "")}
          className={classnames("HeaderMobil__icon", {
            "HeaderMobil__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={"GITHUB"} />
        </a>
      </div>
      <Toogle
        onChange={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        className={classnames("HeaderMobil__toogle", {
          "HeaderMobil__toogle--displayMenu": displayMenu,
        })}
      />
    </div>
  );
};

HeaderMobil.propTypes = {
  nav: object.isRequired,
  setDarkMode: func.isRequired,
  pathname: string.isRequired,
  darkMode: bool,
};

export default HeaderMobil;
