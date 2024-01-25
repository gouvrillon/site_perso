import React from "react";
import "./SectionTitle.css";
import { bool, string, number } from "prop-types";
import Title1 from "../Title1/Title1.jsx";
import Title2 from "../Title2/Title2.jsx";
import Title3 from "../Title3/Title3.jsx";
import Section from "../Section/Section.jsx";
import isEqual from "lodash/isEqual";

const SectionTitle = ({ darkMode, reversed, text, level }) => {
  return (
    <Section darkMode={darkMode} reversed={reversed}>
      <div className="SectionTitle">
        <div className="SectionTitle__container">
          {isEqual(level, 1) ? (
            <Title1 text={text} darkMode={darkMode} />
          ) : isEqual(level, 2) ? (
            <Title2 text={text} darkMode={darkMode} />
          ) : (
            <Title3 text={text} darkMode={darkMode} />
          )}
        </div>
        <div className="SectionTitle__container" />
      </div>
    </Section>
  );
};

SectionTitle.propTypes = {
  text: string.isRequired,
  level: number.isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SectionTitle;
