import React from "react";
import "./SectionTitle2.css";
import { bool, string } from "prop-types";
import classnames from "classnames";
import Title2 from "../Title2/Title2.jsx";

const SectionTitle2 = ({ darkMode, reversed, text }) => {
  return (
    <div
      className={classnames("SectionTitle2", {
        "SectionTitle2--reversed": !darkMode && reversed,
        "SectionTitle2--darkMode": darkMode && !reversed,
        "SectionTitle2--darkMode--reversed": darkMode && reversed,
      })}
    >
      <div className="SectionTitle2__container">
        <Title2 text={text} darkMode={darkMode} />
      </div>
      <div className="SectionTitle2__container" />
    </div>
  );
};

SectionTitle2.propTypes = {
  text: string.isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SectionTitle2;
