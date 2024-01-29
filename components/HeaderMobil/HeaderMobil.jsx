import React, { useState } from "react";
import classnames from "classnames";
import "./HeaderMobil.css";
import Icon from "../Icon/Icon.jsx";
import Toogle from "../Toogle/Toogle.jsx";
import Nav from "../Nav/Nav.jsx";
import { func, bool, object } from "prop-types";
import get from "lodash/get";

const HeaderMobil = ({ darkMode, setDarkMode, navConst }) => {
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
      <div
        className={classnames("HeaderMobil__icons", {
          "HeaderMobil__icons--displayMenu": displayMenu,
        })}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "linkedin.href", "")}
          className={classnames("HeaderMobil__icon", {
            "HeaderMobil__icon--displayMenu": darkMode,
          })}
        >
          <Icon icon={"LINKEDIN"} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={get(navConst, "github.href", "")}
          className={classnames("HeaderMobil__icon", {
            "HeaderMobil__icon--displayMenu": darkMode,
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
  navConst: object.isRequired,
  setDarkMode: func.isRequired,
  darkMode: bool,
};

export default HeaderMobil;
