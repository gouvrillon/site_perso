import React from "react";
import "./SectionNotFound.css";
import { bool, object } from "prop-types";
import Title1 from "../Title1/Title1.jsx";
import Title2 from "../Title2/Title2.jsx";
import Section from "../Section/Section.jsx";
import Portrait from "../Portrait/Portrait.jsx";
import Linky from "../Linky/Linky.jsx";
import get from "lodash/get";

const SectionNotFound = ({ darkMode, nav }) => {
  return (
    <Section darkMode={darkMode}>
      <div className="SectionNotFound">
        <div className="SectionNotFound__container">
          <Title1
            className="SectionNotFound__title"
            text={get(nav, "notFound.title", "")}
            darkMode={darkMode}
          />
          <Portrait
            className="SectionNotFound__portrait"
            darkMode={darkMode}
            image={get(nav, "notFound.image", "")}
          />
          <Title2
            className="SectionNotFound__title"
            text={get(nav, "notFound.text", "")}
            darkMode={darkMode}
          />
          <Linky
            label="Retour"
            href={get(nav, "notFound.href", "")}
            darkMode={darkMode}
            className="SectionNotFound__linky"
          />
        </div>
      </div>
    </Section>
  );
};

SectionNotFound.propTypes = {
  nav: object.isRequired,
  darkMode: bool,
};

export default SectionNotFound;
