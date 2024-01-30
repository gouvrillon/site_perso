import React, { useState, Children, cloneElement, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { node, object } from "prop-types";
import "./Layout.css";

const Layout = ({ children, navConst }) => {
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("darkMode") === "true"
    ) {
      setDarkMode(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
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
      )}
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  navConst: object.isRequired,
};

export default Layout;
