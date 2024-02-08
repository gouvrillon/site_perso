import React from "react";
import "./SectionDetails.css";
import get from "lodash/get";
import { object, bool, func } from "prop-types";
import classnames from "classnames";
import Tag from "../Tag/Tag.jsx";
import Title3 from "../Title3/Title3.jsx";
import Section from "../Section/Section.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Techno from "../Techno/Techno.jsx";
import Soft from "../Soft/Soft.jsx";
import Value from "../Value/Value.jsx";
import Action from "../Action/Action.jsx";
import ModalImage from "../ModalImage/ModalImage.jsx";
import Label from "../Label/Label.jsx";
import isEmpty from "lodash/isEmpty";

const SectionDetails = ({ reversed, darkMode, project, setModal }) => {
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
            <div
              className="SectionDetails__image__container"
              onClick={() =>
                setModal({
                  title: get(project, "title", ""),
                  content: <ModalImage src={get(project, "images[1]", "")} />,
                })
              }
            >
              <img
                className={classnames("SectionDetails__image", {
                  "SectionDetails__image--darkMode": darkMode,
                })}
                src={get(project, "images[1]", "")}
              />
              <div
                className={classnames("SectionDetails__filter", {
                  "SectionDetails__filter--darkMode": darkMode,
                })}
              />
              <Label
                label="Voir"
                darkMode={darkMode}
                className="SectionDetails__label"
              />
            </div>
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
            <div
              className="SectionDetails__image__container"
              onClick={() =>
                setModal({
                  title: get(project, "title", ""),
                  content: <ModalImage src={get(project, "images[2]", "")} />,
                })
              }
            >
              <img
                className={classnames("SectionDetails__image", {
                  "SectionDetails__image--darkMode": darkMode,
                })}
                src={get(project, "images[2]", "")}
              />
              <div
                className={classnames("SectionDetails__filter", {
                  "SectionDetails__filter--darkMode": darkMode,
                })}
              />
              <Label
                label="Voir"
                darkMode={darkMode}
                className="SectionDetails__label"
              />
            </div>
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
              text="Mon rôle"
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
            <div
              className="SectionDetails__image__container"
              onClick={() =>
                setModal({
                  title: get(project, "title", ""),
                  content: <ModalImage src={get(project, "images[0]", "")} />,
                })
              }
            >
              <img
                className={classnames("SectionDetails__image", {
                  "SectionDetails__image--darkMode": darkMode,
                })}
                src={get(project, "images[0]", "")}
              />
              <div
                className={classnames("SectionDetails__filter", {
                  "SectionDetails__filter--darkMode": darkMode,
                })}
              />
              <Label
                label="Voir"
                darkMode={darkMode}
                className="SectionDetails__label"
              />
            </div>
          </div>
        </div>
        {!isEmpty(get(project, "link", "")) && (
          <Action
            href={get(project, "link", "")}
            image={get(project, "images[0]", "")}
            label="Voir le site"
            darkMode={darkMode}
            className="SectionDetails__action"
          />
        )}
      </div>
    </Section>
  );
};

SectionDetails.propTypes = {
  project: object.isRequired,
  setModal: func,
  reversed: bool,
  darkMode: bool,
};

export default SectionDetails;
