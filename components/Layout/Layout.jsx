import React, { useState, Children, cloneElement } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { node, object } from "prop-types";
import "./Layout.css";

const Layout = ({ children, headerConst }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="Layout">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        headerConst={headerConst}
      />
      {Children.map(children, (child) =>
        cloneElement(child, {
          darkMode: darkMode,
        })
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  headerConst: object.isRequired,
};

export default Layout;
