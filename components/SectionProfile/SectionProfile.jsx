import React from "react";
import "./SectionProfile.css";
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

const SectionProfile = ({ reversed, darkMode, profile }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionProfile", {
          "SectionProfile--reversed": reversed,
        })}
      >
        <div className="SectionProfile__container SectionProfile__container--left">
          <Title3
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
          <Link
            label="Voir le profil"
            href={get(profile, "href", "")}
            darkMode={darkMode}
            isInternal={true}
            className="SectionProfile__link"
            reversed={reversed}
          />
        </div>
        <div className="SectionProfile__container">
          <a
            href={get(profile, "href", "")}
            className="SectionProfile__image"
            style={{ backgroundImage: `url(${get(profile, "image", "")})` }}
          >
            <div
              className={classnames("SectionProfile__filter", {
                "SectionProfile__filter--darkMode": darkMode,
              })}
            />
            <Label
              label="Voir le profil"
              darkMode={darkMode}
              className="SectionProfile__label"
            />
          </a>
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
