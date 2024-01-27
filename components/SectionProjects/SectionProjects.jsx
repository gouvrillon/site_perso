import React from "react";
import { object, bool, arrayOf } from "prop-types";
import Section from "../Section/Section.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import SlideProject from "../SlideProject/SlideProject.jsx";
import Title2 from "../Title2/Title2.jsx";
import "./SectionProjects.css";

const SectionProjects = ({ projects, reversed, darkMode }) => {
  return (
    <Section reversed={reversed} darkMode={darkMode}>
      <div>
        <Title2
          className="SectionProjects__title"
          text="Tous les projets"
          darkMode={darkMode}
        />
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
      </div>
    </Section>
  );
};

SectionProjects.propTypes = {
  projects: arrayOf(object).isRequired,
  reversed: bool,
  darkMode: bool,
};

export default SectionProjects;
