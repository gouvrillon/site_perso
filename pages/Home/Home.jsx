"use client";

import React, { useState } from "react";
import "./Home.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SectionProject from "../../components/SectionProject/SectionProject.jsx";
import SectionSkills from "../../components/SectionSkills/SectionSkills.jsx";
import SectionContact from "../../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../../components/SectionProjects/SectionProjects.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import isEqual from "lodash/isEqual";
import classnames from "classnames";

const HOME_CONST_PROJECT = {
  image: "/images/screenshots/AMAZON.png",
  title: "Refonte complète de backoffice",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "NODE"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
};

const HOME_CONST_PROJECT_2 = {
  image: "/images/screenshots/APTIPHAR.png",
  title: "Implémentation e-commerce sur site existant",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
};

const HOME_CONST_PROJECTS = [
  HOME_CONST_PROJECT,
  HOME_CONST_PROJECT_2,
  HOME_CONST_PROJECT,
  HOME_CONST_PROJECT_2,
  HOME_CONST_PROJECT,
  HOME_CONST_PROJECT_2,
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={classnames("Home", { "Home--darkMode": darkMode })}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SectionTitle level={1} darkMode={darkMode} text="Homepage" />
      <SectionTitle
        level={2}
        darkMode={darkMode}
        text="Tous les projets"
        reversed={true}
      />
      <SectionProjects darkMode={darkMode} projects={HOME_CONST_PROJECTS} />
      <SectionProjects
        darkMode={darkMode}
        reversed={true}
        projects={HOME_CONST_PROJECTS}
      />
      <SectionTitle darkMode={darkMode} text="Les derniers projets" level={2} />
      {HOME_CONST_PROJECTS.map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 0)}
          darkMode={darkMode}
        />
      ))}
      <SectionTitle
        level={2}
        darkMode={darkMode}
        text="Compétences"
        reversed={true}
      />
      <SectionSkills darkMode={darkMode} />
      <SectionSkills darkMode={darkMode} reversed={true} />
      <SectionTitle level={2} darkMode={darkMode} text="Contact" />
      <SectionContact darkMode={darkMode} reversed={true} />
      <SectionContact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
