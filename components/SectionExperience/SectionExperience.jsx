import React from "react";
import "./SectionExperience.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Client from "../Client/Client.jsx";
import Section from "../Section/Section.jsx";

const SectionExperience = ({ reversed, darkMode, experience }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionExperience", {
          "SectionExperience--reversed": reversed,
        })}
      >
        <div className="SectionExperience__container">
          <Client
            client={get(experience, "client", {})}
            reversed={reversed}
            darkMode={darkMode}
          />
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
