import React from "react";
import "./SectionProject.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Techno from "../Techno/Techno.jsx";
import Link from "../Link/Link.jsx";
import Label from "../Label/Label.jsx";
import Tag from "../Tag/Tag.jsx";
import Title3 from "../Title3/Title3.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Section from "../Section/Section.jsx";

const SectionProject = ({ project, reversed, darkMode }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionProject ", {
          "SectionProject--reversed": reversed,
        })}
      >
        <div className="SectionProject__image">
          <a
            className={classnames("SectionProject__image__container ", {
              "SectionProject__image__container--darkMode": darkMode,
            })}
            href={get(project, "href", "")}
          >
            <img
              className="SectionProject__image__image"
              src={get(project, "image", "")}
            />
            <div
              className={classnames("SectionProject__image__filter ", {
                "SectionProject__image__filter--darkMode": darkMode,
              })}
            />
            <Label
              label="Voir le projet"
              darkMode={darkMode}
              className="SectionProject__image__label"
            />
          </a>
        </div>
        <div className="SectionProject__infos">
          <div
            className={classnames("SectionProject__infos__container", {
              "SectionProject__infos__container--darkMode": darkMode,
            })}
          >
            <Title3
              className="SectionProject__title"
              text={get(project, "title", "")}
              darkMode={darkMode}
            />
            <div className="SectionProject__technos">
              {get(project, "technos", []).map((techno, index) => (
                <Techno
                  key={index}
                  name={techno}
                  darkMode={darkMode}
                  reversed={reversed}
                />
              ))}
            </div>
            <Paragraph
              className="SectionProject__description"
              text={get(project, "description", "")}
              darkMode={darkMode}
            />
            <div className="SectionProject__tags">
              {get(project, "tags", []).map((tag, index) => (
                <Tag key={index} label={tag} darkMode={darkMode} />
              ))}
            </div>
            <Link
              label="Voir le projet"
              href={get(project, "href", "")}
              darkMode={darkMode}
              isInternal={true}
              className="SectionProject__link"
              reversed={reversed}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionProject.propTypes = {
  project: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionProject;
