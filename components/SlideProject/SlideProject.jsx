import React from "react";
import { object, bool } from "prop-types";
import "./SlideProject.css";
import Label from "../Label/Label.jsx";
import classnames from "classnames";
import get from "lodash/get";
import Techno from "../Techno/Techno.jsx";
import Tag from "../Tag/Tag.jsx";
import Title3 from "../Title3/Title3.jsx";

const SlideProject = ({ project, darkMode, reversed }) => {
  return (
    <a
      href={get(project, "href", "")}
      className={classnames("SlideProject", {
        "SlideProject--reversed": !darkMode && reversed,
        "SlideProject--darkMode": darkMode && !reversed,
        "SlideProject--darkMode--reversed": darkMode && reversed,
      })}
    >
      <div
        className={classnames("SlideProject__image", {
          "SlideProject__image--darkMode": darkMode,
        })}
        style={{ backgroundImage: `url(${get(project, "image", "")})` }}
      />
      <div
        className={classnames("SlideProject__filter ", {
          "SlideProject__filter--darkMode": darkMode,
        })}
      />
      <Label
        label="Voir le projet"
        darkMode={darkMode}
        className="SlideProject__label"
      />
      <Title3
        className="SlideProject__title"
        text={get(project, "title", "")}
        darkMode={darkMode}
      />
      <div className="SlideProject__technos">
        {get(project, "technos", []).map((techno, index) => (
          <Techno
            key={index}
            name={techno}
            darkMode={darkMode}
            reversed={!reversed}
          />
        ))}
      </div>
      <div className="SlideProject__tags">
        {get(project, "tags", []).map((tag, index) => (
          <Tag key={index} label={tag} darkMode={darkMode} />
        ))}
      </div>
    </a>
  );
};

SlideProject.propTypes = {
  project: object.isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SlideProject;
