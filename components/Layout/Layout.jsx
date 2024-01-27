import React, { useState, Children, cloneElement } from "react";
import Header from "../../components/Header/Header.jsx";
import { node } from "prop-types";
import "./Layout.css";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="Layout">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {Children.map(children, (child) =>
        cloneElement(child, {
          darkMode: darkMode,
        })
      )}
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
