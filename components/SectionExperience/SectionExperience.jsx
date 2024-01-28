import React from "react";
import "./SectionExperience.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Client from "../Client/Client.jsx";
import Section from "../Section/Section.jsx";
import Title3 from "../Title3/Title3.jsx";
import City from "../City/City.jsx";
import Date from "../Date/Date.jsx";
import Techno from "../Techno/Techno.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Tag from "../Tag/Tag.jsx";
import Soft from "../Soft/Soft.jsx";

const SectionExperience = ({ reversed, darkMode, experience }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div className="SectionExperience">
        <div className="SectionExperience__container__client">
          <Client
            client={get(experience, "client", {})}
            reversed={reversed}
            darkMode={darkMode}
          />
        </div>
        <div className="SectionExperience__container__infos">
          {get(experience, "jobs", []).map((job, index) => (
            <div
              key={index}
              className={classnames("SectionExperience__container__info", {
                "SectionExperience__container__info--reversed":
                  reversed && !darkMode,
                "SectionExperience__container__info--darkMode":
                  !reversed && darkMode,
                "SectionExperience__container__info--darkMode--reversed":
                  reversed && darkMode,
              })}
            >
              <Title3
                className="SectionExperience__title"
                text={get(job, "title", "")}
                darkMode={darkMode}
              />
              <City
                className="SectionExperience__city"
                city={get(job, "city", "")}
                darkMode={darkMode}
              />
              <Date
                className="SectionExperience__date"
                date={get(job, "date", "")}
                darkMode={darkMode}
              />
              <div className="SectionExperience__list">
                {get(job, "technos", []).map((techno, index) => (
                  <Techno
                    key={index}
                    name={techno}
                    darkMode={darkMode}
                    reversed={!reversed}
                  />
                ))}
              </div>
              <Paragraph
                className="SectionExperience__paragraph"
                text={get(job, "description", "")}
                darkMode={darkMode}
              />
              <div className="SectionExperience__list">
                {get(job, "tags", []).map((tag, index) => (
                  <Tag key={index} label={tag} darkMode={darkMode} />
                ))}
              </div>
              <div className="SectionExperience__list">
                {get(job, "softs", []).map((soft, index) => (
                  <Soft key={index} name={soft} darkMode={darkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

SectionExperience.propTypes = {
  experience: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionExperience;
