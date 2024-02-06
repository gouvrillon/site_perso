import React, { useState, Children, cloneElement, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { node, object, bool } from "prop-types";
import "./Layout.css";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const Layout = ({ children, nav, darkModeCookie }) => {
  const [darkMode, setDarkMode] = useState(darkModeCookie);
  const pathname = usePathname();

  useEffect(() => {
    Cookies.set("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="Layout">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
        pathname={pathname}
      />
      {Children.map(children, (child) =>
        cloneElement(child, {
          darkMode: darkMode,
        })
      )}
      <Footer
        darkMode={darkMode}
        nav={nav}
        setDarkMode={setDarkMode}
        pathname={pathname}
      />
    </div>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  nav: object.isRequired,
  darkModeCookie: bool,
};

export default Layout;
