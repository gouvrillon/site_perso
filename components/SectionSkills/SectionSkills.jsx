import React from "react";
import "./SectionSkills.css";
import get from "lodash/get";
import { bool } from "prop-types";
import classnames from "classnames";
import Techno from "../Techno/Techno.jsx";
import Tag from "../Tag/Tag.jsx";
import Soft from "../Soft/Soft.jsx";
import Value from "../Value/Value.jsx";
import Title2 from "../Title2/Title2.jsx";
import Title3 from "../Title3/Title3.jsx";
import Icon from "../Icon/Icon.jsx";
import {
  SECTIONS_SKILLS_TECHNOS_CONST,
  SECTIONS_SKILLS_TAGS_CONST,
  SECTIONS_SKILLS_SOFTS_CONST,
  SECTIONS_SKILLS_VALUES_CONST,
} from "./SectionSkillsConst.jsx";
import Section from "../Section/Section.jsx";

const SectionSkills = ({ darkMode, reversed }) => {
  return (
    <Section darkMode={darkMode} reversed={reversed}>
      <div className="SectionSkills">
        <div className="SectionSkills__line">
          <div className="SectionSkills__list">
            <Title2
              className="SectionSkills__title2"
              text="Compétences"
              darkMode={darkMode}
            />
            <Title3
              className="SectionSkills__title3"
              text="Hard skills"
              darkMode={darkMode}
            />
            {SECTIONS_SKILLS_TECHNOS_CONST.map((techno, index) => (
              <div className="SectionSkills__row" key={index}>
                <Techno
                  name={get(techno, "name", "")}
                  darkMode={darkMode}
                  className="SectionSkills__element"
                  reversed={reversed}
                />
                {Array.from({ length: get(techno, "level", 0) }, (v, index) => (
                  <div
                    key={index}
                    className={classnames("SectionSkills__star", {
                      "SectionSkills__star--darkMode": darkMode,
                    })}
                  >
                    <Icon icon="STAR" />
                  </div>
                ))}
                {Array.from(
                  { length: 5 - get(techno, "level", 0) },
                  (v, index) => (
                    <div
                      key={index}
                      className={classnames("SectionSkills__star", {
                        "SectionSkills__star--darkMode": darkMode,
                      })}
                    >
                      <Icon icon="STAR_EMPTY" />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="SectionSkills__list SectionSkills__list--second">
            <Title3
              className="SectionSkills__title3"
              text="Global skills"
              darkMode={darkMode}
            />
            {SECTIONS_SKILLS_TAGS_CONST.map((tag, index) => (
              <div className="SectionSkills__row" key={index}>
                <Tag
                  label={get(tag, "label", "")}
                  darkMode={darkMode}
                  className="SectionSkills__element"
                />
                {Array.from({ length: get(tag, "level", 0) }, (v, index) => (
                  <div
                    key={index}
                    className={classnames("SectionSkills__star", {
                      "SectionSkills__star--darkMode": darkMode,
                    })}
                  >
                    <Icon icon="STAR" />
                  </div>
                ))}
                {Array.from(
                  { length: 5 - get(tag, "level", 0) },
                  (v, index) => (
                    <div
                      key={index}
                      className={classnames("SectionSkills__star", {
                        "SectionSkills__star--darkMode": darkMode,
                      })}
                    >
                      <Icon icon="STAR_EMPTY" />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="SectionSkills__line">
          <div className="SectionSkills__list">
            <Title3
              className="SectionSkills__title3"
              text="Soft skills"
              darkMode={darkMode}
            />
            {SECTIONS_SKILLS_SOFTS_CONST.map((soft, index) => (
              <div className="SectionSkills__row" key={index}>
                <Soft
                  name={get(soft, "name", "")}
                  darkMode={darkMode}
                  className="SectionSkills__element"
                />
              </div>
            ))}
          </div>
          <div className="SectionSkills__list">
            <Title3
              className="SectionSkills__title3"
              text="Valeurs"
              darkMode={darkMode}
            />
            {SECTIONS_SKILLS_VALUES_CONST.map((value, index) => (
              <div className="SectionSkills__row" key={index}>
                <Value
                  label={get(value, "label", "")}
                  darkMode={darkMode}
                  className="SectionSkills__element"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionSkills.propTypes = {
  darkMode: bool,
  reversed: bool,
};

export default SectionSkills;
