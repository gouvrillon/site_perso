import React from "react";
import "./SectionNotFound.css";
import { bool, object } from "prop-types";
import Title1 from "../Title1/Title1.jsx";
import Section from "../Section/Section.jsx";
import Portrait from "../Portrait/Portrait.jsx";
import Link from "../Link/Link.jsx";
import get from "lodash/get";

const SectionNotFound = ({ darkMode, notFound }) => {
  return (
    <Section darkMode={darkMode}>
      <div className="SectionNotFound">
        <div className="SectionNotFound__container">
          <Portrait
            className="SectionNotFound__portrait"
            darkMode={darkMode}
            image={get(notFound, "image", "")}
          />
          <Title1
            className="SectionNotFound__title"
            text={get(notFound, "text", "")}
            darkMode={darkMode}
          />
          <Link
            label="Retour"
            href={get(notFound, "href", "")}
            darkMode={darkMode}
            isInternal={true}
            className="SectionNotFound__link"
          />
        </div>
      </div>
    </Section>
  );
};

SectionNotFound.propTypes = {
  notFound: object.isRequired,
  darkMode: bool,
};

export default SectionNotFound;
