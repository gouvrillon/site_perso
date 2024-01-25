import React from "react";
import { object, bool } from "prop-types";
import "./SectionProjectsSlide.css";
import Label from "../Label/Label.jsx";
import classnames from "classnames";

const SectionProjectsSlide = ({ slide, darkMode }) => {
  return (
    <div
      className={classnames("SectionProjectsSlide ", {
        "SectionProjectsSlide--darkMode": darkMode,
      })}
      style={{ backgroundImage: `url(${slide.url})` }}
    >
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
    </div>
  );
};

SectionProjectsSlide.propTypes = {
  slide: object.isRequired,
  darkMode: bool,
};

export default SectionProjectsSlide;
