import React from "react";
import { object, bool, arrayOf } from "prop-types";
import Section from "../Section/Section.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import SlideProject from "../SlideProject/SlideProject.jsx";

const SectionProjects = ({ projects, reversed, darkMode }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <Carousel
        darkMode={darkMode}
        slides={projects.map((project, index) => (
          <SlideProject
            key={index}
            project={project}
            darkMode={darkMode}
            reversed={reversed}
          />
        ))}
      />
    </Section>
  );
};

SectionProjects.propTypes = {
  projects: arrayOf(object).isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionProjects;
