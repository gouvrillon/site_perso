import React from "react";
import "./ModalProject.css";
import { string, bool } from "prop-types";
import Linky from "../Linky/Linky.jsx";

const ModalProject = ({ src, href, darkMode }) => {
  return (
    <div className="ModalProject">
      <img src={src} className="ModalProject__image" />
      <Linky
        label="Voir le site"
        href={href}
        darkMode={darkMode}
        isExternal={true}
      />
    </div>
  );
};

ModalProject.propTypes = {
  src: string.isRequired,
  href: string.isRequired,
  darkMode: bool,
};

export default ModalProject;
