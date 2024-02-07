import React, { useState, Children, cloneElement, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Modal from "../Modal/Modal.jsx";
import { node, object, bool } from "prop-types";
import "./Layout.css";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

const Layout = ({ children, nav, darkModeCookie }) => {
  const [darkMode, setDarkMode] = useState(darkModeCookie);
  const [modal, setModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    Cookies.set("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="Layout">
      {modal && (
        <Modal darkMode={darkMode} setModal={setModal} title={modal.title}>
          {modal.content}
        </Modal>
      )}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        nav={nav}
        pathname={pathname}
      />
      {Children.map(children, (child) =>
        cloneElement(child, {
          darkMode: darkMode,
          setModal: setModal,
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
