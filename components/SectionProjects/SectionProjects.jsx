import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionProjectsSlide from "../SectionProjectsSlide/SectionProjectsSlide.jsx";
// import SectionProjectsArrow from "../SectionProjectsArrow/SectionProjectsArrow.jsx";
import Section from "../../components/Section/Section.jsx";
import { bool, arrayOf, object } from "prop-types";

const SectionProjects = ({ darkMode, reversed, projects }) => {
  var settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <SectionProjectsArrow darkMode={darkMode} type="PREV" />,
    // nextArrow: <SectionProjectsArrow darkMode={darkMode} type="NEXT" />,
    centerMode: true,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 1020,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 520,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Section darkMode={darkMode} reversed={reversed}>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <SectionProjectsSlide
            key={index}
            project={project}
            darkMode={darkMode}
            reversed={reversed}
          />
        ))}
      </Slider>
    </Section>
  );
};

SectionProjects.propTypes = {
  projects: arrayOf(object).isRequired,
  darkMode: bool,
  reversed: bool,
};

export default SectionProjects;
