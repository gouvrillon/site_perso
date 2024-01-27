import React from "react";
import "./SectionExperience.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Client from "../Client/Client.jsx";
import Section from "../Section/Section.jsx";
import Title2 from "../Title2/Title2.jsx";
import City from "../City/City.jsx";
import Date from "../Date/Date.jsx";

const SectionExperience = ({ reversed, darkMode, experience }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionExperience", {
          "SectionExperience--reversed": reversed,
        })}
      >
        <div className="SectionExperience__container__client">
          <Client
            client={get(experience, "client", {})}
            reversed={reversed}
            darkMode={darkMode}
          />
        </div>
        <div className="SectionExperience__container__infos">
          {get(experience, "experiences", []).map((experience, index) => (
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
              <Title2
                className="SectionExperience__title"
                text={get(experience, "title", "")}
                darkMode={darkMode}
              />
              <City
                className="SectionExperience__city"
                city={get(experience, "city", "")}
                darkMode={darkMode}
              />
              <Date
                className="SectionExperience__date"
                date={get(experience, "date", "")}
                darkMode={darkMode}
              />
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
