import React from "react";
import "./SectionPresentation.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Title2 from "../Title2/Title2.jsx";
import Section from "../Section/Section.jsx";
import Soft from "../Soft/Soft.jsx";
import Tag from "../Tag/Tag.jsx";

const SectionPresentation = ({ reversed, darkMode, profile }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionPresentation">
        <div className="SectionPresentation__container">
          <Title2
            className="SectionPresentation__title"
            text="Présentation"
            darkMode={darkMode}
          />
          <div className="SectionPresentation__softs">
            {get(profile, "softs", []).map((soft, index) => (
              <Soft key={index} name={soft} darkMode={darkMode} />
            ))}
          </div>
          {get(profile, "presentation", []).map((paragraph, index) => (
            <Paragraph
              key={index}
              className="SectionPresentation__paragraph"
              text={paragraph}
              darkMode={darkMode}
            />
          ))}
          <div className="SectionPresentation__tags">
            {get(profile, "tags", []).map((tag, index) => (
              <Tag key={index} label={tag} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionPresentation.propTypes = {
  profile: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionPresentation;
