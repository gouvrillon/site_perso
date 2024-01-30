import React, { useState, Children, cloneElement, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { node, object, bool } from "prop-types";
import "./Layout.css";
import isEqual from "lodash/isEqual";
import isArray from "lodash/isArray";

const Layout = ({ children, nav, darkModeCookie }) => {
  const [darkMode, setDarkMode] = useState(darkModeCookie);

  useEffect(() => {
    if (!isEqual(typeof window, "undefined")) {
      document.cookie = `darkMode=${darkMode}`;
    }
  }, [darkMode]);

  return (
    <div className="Layout">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} nav={nav} />
      {isArray(Children) &&
        Children.map(children, (child) =>
          cloneElement(child, {
            darkMode: darkMode,
          })
        )}
      <Footer darkMode={darkMode} nav={nav} setDarkMode={setDarkMode} />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  nav: object.isRequired,
  darkModeCookie: bool,
};

export default Layout;
