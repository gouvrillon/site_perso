import React, { useState, Children, cloneElement, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { node, object, bool } from "prop-types";
import "./Layout.css";
import isEqual from "lodash/isEqual";

const Layout = ({ children, navConst, darkModeCookie }) => {
  const [darkMode, setDarkMode] = useState(darkModeCookie);

  useEffect(() => {
    console.log(`/  __ \     | | |                 `);
    console.log(`| /  \/ __ _| | |  _ __ ___   ___ `);
    console.log(`| |    / _  | | | | _    _ \ / _ \`);   
    console.log(`| \__/\ (_| | | | | | | | | |  __/``);
     console.log(`\____/\__,_|_|_| |_| |_| |_|\___|`);  
    if (!isEqual(typeof window, "undefined")) {
      document.cookie = `darkMode=${darkMode}`;
    }
  }, [darkMode]);

  return (
    <div className="Layout">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        navConst={navConst}
      />
      {Children.map(children, (child) =>
        cloneElement(child, {
          darkMode: darkMode,
        })
      )}
      <Footer
        darkMode={darkMode}
        navConst={navConst}
        setDarkMode={setDarkMode}
      />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  navConst: object.isRequired,
  darkModeCookie: bool,
};

export default Layout;
