import React from "react";
import "./SectionPresentation.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Title2 from "../Title2/Title2.jsx";
import Section from "../Section/Section.jsx";
import Soft from "../Soft/Soft.jsx";
import Tag from "../Tag/Tag.jsx";

const SectionPresentation = ({ reversed, darkMode, presentation }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionPresentation">
        <div className="SectionPresentation__container">
          <Title2
            className="SectionPresentation__title"
            text={get(presentation, "title", "")}
            darkMode={darkMode}
          />
          <div className="SectionPresentation__softs">
            {get(presentation, "softs", []).map((soft, index) => (
              <Soft key={index} name={soft} darkMode={darkMode} />
            ))}
          </div>
          {get(presentation, "paragraphs", []).map((paragraph, index) => (
            <Paragraph
              key={index}
              className="SectionPresentation__paragraph"
              text={paragraph}
              darkMode={darkMode}
            />
          ))}
          <div className="SectionPresentation__tags">
            {get(presentation, "tags", []).map((tag, index) => (
              <Tag key={index} label={tag} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionPresentation.propTypes = {
  presentation: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionPresentation;
