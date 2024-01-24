import React from "react";
import { object } from "prop-types";
import "./SectionProjectsSlide.css";

const SectionProjectsSlide = ({ slide }) => {
  return (
    <div
      className="SectionProjectsSlide"
      style={{ backgroundImage: `url(${slide.url})` }}
    ></div>
  );
};

SectionProjectsSlide.propTypes = {
  slide: object.isRequired,
};

export default SectionProjectsSlide;
