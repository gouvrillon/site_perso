import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SECTIONS_SLIDES_CONST } from "./SectionProjectsConst";
import SectionProjectsSlide from "../SectionProjectsSlide/SectionProjectsSlide.jsx";
import SectionProjectsArrow from "../SectionProjectsArrow/SectionProjectsArrow.jsx";
import Title2 from "../../components/Title2/Title2.jsx";
import { bool } from "prop-types";
import classnames from "classnames";
import "./SectionProjects.css";

const SectionProjects = ({ darkMode, reversed }) => {
  var settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <SectionProjectsArrow darkMode={darkMode} type="PREV" />,
    nextArrow: <SectionProjectsArrow darkMode={darkMode} type="NEXT" />,
    centerMode: true,
  };
  return (
    <div
      className={classnames("SectionProjects", {
        "SectionProjects--reversed": reversed && !darkMode,
        "SectionProjects--darkMode": !reversed && darkMode,
        "SectionProjects--darkMode--reversed": reversed && darkMode,
      })}
    >
      <Title2
        text="Title des projets"
        darkMode={darkMode}
        className="SectionProjects__title"
      />
      <Slider {...settings}>
        {SECTIONS_SLIDES_CONST.map((slide, index) => (
          <SectionProjectsSlide key={index} slide={slide} />
        ))}
      </Slider>
    </div>
  );
};

SectionProjects.propTypes = {
  darkMode: bool,
  reversed: bool,
};

export default SectionProjects;
