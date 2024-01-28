import React from "react";
import "./SectionDetails.css";
import get from "lodash/get";
import { object, bool } from "prop-types";
import classnames from "classnames";
import Tag from "../Tag/Tag.jsx";
import Title1 from "../Title1/Title1.jsx";
import Section from "../Section/Section.jsx";

const SectionDetails = ({ reversed, darkMode, project }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div
        className={classnames("SectionDetails", {
          "SectionDetails--reversed": reversed,
        })}
      >
        <div className="SectionDetails__container">
          <div className="SectionDetails__left"></div>
          <div className="SectionDetails__right"></div>
        </div>
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
