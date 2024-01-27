import React from "react";
import "./SectionProfile.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Techno from "../Techno/Techno.jsx";
import Link from "../Link/Link.jsx";
import Tag from "../Tag/Tag.jsx";
import Title1 from "../Title1/Title1.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
import Section from "../Section/Section.jsx";
import Soft from "../Soft/Soft.jsx";
import Portrait from "../Portrait/Portrait.jsx";

const SectionProfile = ({ reversed, darkMode, profile }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionProfile", {
          "SectionProfile--reversed": reversed,
        })}
      >
        <div className="SectionProfile__container SectionProfile__container--left">
          <Title1
            className="SectionProfile__title"
            text={get(profile, "title", "")}
            darkMode={darkMode}
          />
          <Paragraph
            className="SectionProfile__description"
            text={get(profile, "description", "")}
            darkMode={darkMode}
          />
          <div className="SectionProfile__tags">
            {get(profile, "tags", []).map((tag, index) => (
              <Tag key={index} label={tag} darkMode={darkMode} />
            ))}
          </div>
        </div>
        <div className="SectionProfile__container SectionProfile__container--center">
          <Portrait className="SectionProfile__portrait" darkMode={darkMode} />
          <Link
            label="Voir le profil"
            href={get(profile, "href", "")}
            darkMode={darkMode}
            isInternal={true}
            className="SectionProfile__link"
            reversed={reversed}
          />
        </div>
        <div className="SectionProfile__container SectionProfile__container--right">
          <div className="SectionProfile__technos">
            {get(profile, "technos", []).map((techno, index) => (
              <Techno
                key={index}
                name={techno}
                darkMode={darkMode}
                reversed={reversed}
              />
            ))}
          </div>
          <div className="SectionProfile__softs">
            {get(profile, "softs", []).map((soft, index) => (
              <Soft key={index} name={soft} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

SectionProfile.propTypes = {
  profile: object.isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionProfile;
