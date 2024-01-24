import React from "react";
import "./SectionSkills.css";
import get from "lodash/get";
import { bool } from "prop-types";
import classnames from "classnames";
import Techno from "../Techno/Techno.jsx";
import Tag from "../Tag/Tag.jsx";
import Soft from "../Soft/Soft.jsx";
import Value from "../Value/Value.jsx";
import Title3 from "../Title3/Title3.jsx";
import Icon from "../Icon/Icon.jsx";
import {
  SECTIONS_SKILLS_TECHNOS_CONST,
  SECTIONS_SKILLS_TAGS_CONST,
  SECTIONS_SKILLS_SOFTS_CONST,
  SECTIONS_SKILLS_VALUES_CONST,
} from "./SectionSkillsConst.jsx";

const SectionSkills = ({ darkMode, reversed }) => {
  return (
    <div
      className={classnames("SectionSkills", {
        "SectionSkills--reversed": !darkMode && reversed,
        "SectionSkills--darkMode": darkMode && !reversed,
        "SectionSkills--darkMode--reversed": darkMode && reversed,
      })}
    >
      <div className="SectionSkills__line">
        <div className="SectionSkills__list">
          <Title3
            className="SectionSkills__title"
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
        <div className="SectionSkills__list">
          <Title3
            className="SectionSkills__title"
            text="Large skills"
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
              {Array.from({ length: 5 - get(tag, "level", 0) }, (v, index) => (
                <div
                  key={index}
                  className={classnames("SectionSkills__star", {
                    "SectionSkills__star--darkMode": darkMode,
                  })}
                >
                  <Icon icon="STAR_EMPTY" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="SectionSkills__line">
        <div className="SectionSkills__list">
          <Title3
            className="SectionSkills__title"
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
            className="SectionSkills__title"
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
  );
};

SectionSkills.propTypes = {
  darkMode: bool,
  reversed: bool,
};

export default SectionSkills;
