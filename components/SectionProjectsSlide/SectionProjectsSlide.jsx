import React from "react";
import { object, bool } from "prop-types";
import "./SectionProjectsSlide.css";
import Label from "../Label/Label.jsx";
import classnames from "classnames";
import get from "lodash/get";
import Techno from "../Techno/Techno.jsx";
import Tag from "../Tag/Tag.jsx";
import Title3 from "../Title3/Title3.jsx";

const SectionProjectsSlide = ({ project, darkMode, reversed }) => {
  return (
    <a
      href={get(project, "href", "")}
      className={classnames("SectionProjectsSlide", {
        "SectionProjectsSlide--reversed": !darkMode && reversed,
        "SectionProjectsSlide--darkMode": darkMode && !reversed,
        "SectionProjectsSlide--darkMode--reversed": darkMode && reversed,
      })}
    >
      <div
        className={classnames("SectionProjectsSlide__image", {
          "SectionProjectsSlide__image--darkMode": darkMode,
        })}
        style={{ backgroundImage: `url(${get(project, "image", "")})` }}
      />
      <div
        className={classnames("SectionProjectsSlide__filter ", {
          "SectionProjectsSlide__filter--darkMode": darkMode,
        })}
      />
      <Label
        label="Voir le projet"
        darkMode={darkMode}
        className="SectionProjectsSlide__label"
      />
      <Title3
        className="SectionProjectsSlide__title"
        text={get(project, "title", "")}
        darkMode={darkMode}
      />
      <div className="SectionProjectsSlide__technos">
        {get(project, "technos", []).map((techno, index) => (
          <Techno
            key={index}
            name={techno}
            darkMode={darkMode}
            reversed={!reversed}
          />
        ))}
      </div>
      <div className="SectionProjectsSlide__tags">
        {get(project, "tags", []).map((tag, index) => (
          <Tag key={index} label={tag} darkMode={darkMode} />
        ))}
      </div>
    </a>
  );
};

SectionProjectsSlide.propTypes = {
  project: object.isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SectionProjectsSlide;
