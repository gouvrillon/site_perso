import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SECTIONS_SLIDES_CONST } from "./SectionProjectsConst";
import SectionProjectsSlide from "../SectionProjectsSlide/SectionProjectsSlide.jsx";
import SectionProjectsArrow from "../SectionProjectsArrow/SectionProjectsArrow.jsx";
import Section from "../../components/Section/Section.jsx";
import { bool } from "prop-types";

const SectionProjects = ({ darkMode, reversed }) => {
  var settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <SectionProjectsArrow darkMode={darkMode} type="PREV" />,
    nextArrow: <SectionProjectsArrow darkMode={darkMode} type="NEXT" />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Section darkMode={darkMode} reversed={reversed}>
      <Slider {...settings}>
        {SECTIONS_SLIDES_CONST.map((slide, index) => (
          <SectionProjectsSlide key={index} slide={slide} darkMode={darkMode} />
        ))}
      </Slider>
    </Section>
  );
};

SectionProjects.propTypes = {
  darkMode: bool,
  reversed: bool,
};

export default SectionProjects;
