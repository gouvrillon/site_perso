import React from "react";
import "./SectionPortrait.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import Tag from "../Tag/Tag.jsx";
import Title1 from "../Title1/Title1.jsx";
import Section from "../Section/Section.jsx";
import Portrait from "../Portrait/Portrait.jsx";

const SectionPortrait = ({ reversed, darkMode, profile }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionPortrait">
        <div className="SectionPortrait__container__title">
          <Title1
            className="SectionPortrait__title"
            text={get(profile, "title", "")}
            darkMode={darkMode}
          />
          <div className="SectionPortrait__tags">
            {get(profile, "tags", []).map((tag, index) => (
              <Tag key={index} label={tag} darkMode={darkMode} />
            ))}
          </div>
        </div>
        <div className="SectionPortrait__container__portrait">
          <Portrait
            className="SectionPortrait__portrait"
            darkMode={darkMode}
            image={get(profile, "image", "")}
          />
        </div>
      </div>
    </Section>
  );
};

SectionPortrait.propTypes = {
  profile: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionPortrait;
