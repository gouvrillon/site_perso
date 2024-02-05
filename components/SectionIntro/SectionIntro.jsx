import React from "react";
import "./SectionIntro.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import Tag from "../Tag/Tag.jsx";
import Title1 from "../Title1/Title1.jsx";
import Section from "../Section/Section.jsx";
import classnames from "classnames";
import Star from "../Star/Star.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";

const SectionIntro = ({ reversed, darkMode, project }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionIntro">
        <div className="SectionIntro__container__title">
          <Title1
            className="SectionIntro__title"
            text={get(project, "title", "")}
            darkMode={darkMode}
          />
          <div className="SectionIntro__tags">
            {get(project, "tags", []).map((tag, index) => (
              <Tag key={index} label={tag} darkMode={darkMode} />
            ))}
          </div>
          <Paragraph
            text={get(project, "description", "")}
            darkMode={darkMode}
          />
          {get(project, "star") && (
            <Star
              label="Top projet"
              className="SectionIntro__star"
              darkMode={darkMode}
            />
          )}
        </div>
        <div className="SectionIntro__container__image">
          <img
            className={classnames("SectionIntro__image", {
              "SectionIntro__image--darkMode": darkMode,
            })}
            src={get(project, "images[0]", "")}
          />
        </div>
      </div>
    </Section>
  );
};

SectionIntro.propTypes = {
  project: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionIntro;
