import React from "react";
import "./SectionDetails.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Tag from "../Tag/Tag.jsx";
import Title3 from "../Title3/Title3.jsx";
import Section from "../Section/Section.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Techno from "../Techno/Techno.jsx";
import Star from "../Star/Star.jsx";
import Soft from "../Soft/Soft.jsx";
import Value from "../Value/Value.jsx";
import Label from "../Label/Label.jsx";
import isEmpty from "lodash/isEmpty";

const SectionDetails = ({ reversed, darkMode, project }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionDetails">
        <div
          className={classnames("SectionDetails__container", {
            "SectionDetails__container--reversed": reversed && !darkMode,
            "SectionDetails__container--darkMode": !reversed && darkMode,
            "SectionDetails__container--darkMode--reversed":
              reversed && darkMode,
          })}
        >
          <div className="SectionDetails__element">
            <Title3
              className="SectionDetails__title"
              text="Objectifs"
              darkMode={darkMode}
            />
            {get(project, "star") && (
              <Star
                label="Top projet"
                className="SectionDetails__star"
                darkMode={darkMode}
              />
            )}
            <div className="SectionDetails__values">
              {get(project, "values", []).map((value, index) => (
                <Value key={index} label={value} darkMode={darkMode} />
              ))}
            </div>
            <Paragraph
              text={get(project, "objective", "")}
              darkMode={darkMode}
              className="SectionDetails__paragraph"
            />
          </div>
          <div className="SectionDetails__element">
            <img
              className="SectionDetails__image"
              src={get(project, "images[0]", "")}
            />
          </div>
        </div>
        <div
          className={classnames(
            "SectionDetails__container SectionDetails__container--reverse",
            {
              "SectionDetails__container--reversed": reversed && !darkMode,
              "SectionDetails__container--darkMode": !reversed && darkMode,
              "SectionDetails__container--darkMode--reversed":
                reversed && darkMode,
            }
          )}
        >
          <div className="SectionDetails__element">
            <img
              className="SectionDetails__image"
              src={get(project, "images[1]", "")}
            />
          </div>
          <div className="SectionDetails__element">
            <Title3
              className="SectionDetails__title"
              text="Technologies"
              darkMode={darkMode}
            />
            <div className="SectionDetails__technos">
              {get(project, "technos", []).map((techno, index) => (
                <Techno
                  key={index}
                  name={techno}
                  darkMode={darkMode}
                  reversed={!reversed}
                />
              ))}
            </div>
            <Paragraph
              text={get(project, "technology", "")}
              darkMode={darkMode}
            />
          </div>
        </div>
        <div
          className={classnames("SectionDetails__container", {
            "SectionDetails__container--reversed": reversed && !darkMode,
            "SectionDetails__container--darkMode": !reversed && darkMode,
            "SectionDetails__container--darkMode--reversed":
              reversed && darkMode,
          })}
        >
          <div className="SectionDetails__element">
            <Title3
              className="SectionDetails__title"
              text="Rôle"
              darkMode={darkMode}
            />
            <Paragraph
              text={get(project, "role", "")}
              darkMode={darkMode}
              className="SectionDetails__paragraph"
            />
            <div className="SectionDetails__softs">
              {get(project, "softs", []).map((soft, index) => (
                <Soft key={index} name={soft} darkMode={darkMode} />
              ))}
            </div>
            <div className="SectionDetails__tags">
              {get(project, "tags", []).map((tag, index) => (
                <Tag key={index} label={tag} darkMode={darkMode} />
              ))}
            </div>
          </div>
          <div className="SectionDetails__element">
            <img
              className="SectionDetails__image"
              src={get(project, "images[2]", "")}
            />
          </div>
        </div>
        {!isEmpty(get(project, "link", "")) && (
          <a
            className="SectionDetails__link"
            href={get(project, "link", "")}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="SectionDetails__link__image"
              src={get(project, "images[0]", "")}
            />
            <Label
              label="Voir le site"
              darkMode={darkMode}
              className="SectionDetails__link__label"
            />
          </a>
        )}
      </div>
    </Section>
  );
};

SectionDetails.propTypes = {
  project: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionDetails;
