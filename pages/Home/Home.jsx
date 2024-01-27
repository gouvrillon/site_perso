"use client";

import React, { useState } from "react";
import "./Home.css";
import SectionProject from "../../components/SectionProject/SectionProject.jsx";
import SectionSkills from "../../components/SectionSkills/SectionSkills.jsx";
import SectionContact from "../../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../../components/SectionProfile/SectionProfile.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import isEqual from "lodash/isEqual";
import classnames from "classnames";

const PROFILE = {
  image: "/images/ME.jpeg",
  title: "Thomas Gouvrillon",
  href: "profile",
  tags: ["freealance", "indé", "développement"],
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
  softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
  description:
    "Développeur expérimenté, je transforme vos idées en sites web percutants. Expert en HTML, CSS, et JavaScript, je crée des expériences utilisateurs modernes et réactives. Parlons de votre projet et faisons-le décoller",
};

const PROJECT_1 = {
  image: "/images/screenshots/AMAZON.png",
  title: "Refonte complète de backoffice",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "NODE"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
};

const PROJECT_2 = {
  image: "/images/screenshots/APTIPHAR.png",
  title: "Implémentation e-commerce sur site existant",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
};

const PROJECTS = [
  PROJECT_1,
  PROJECT_2,
  PROJECT_1,
  PROJECT_2,
  PROJECT_1,
  PROJECT_2,
  PROJECT_1,
  PROJECT_2,
  PROJECT_1,
  PROJECT_2,
  PROJECT_1,
  PROJECT_2,
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={classnames("Home", { "Home--darkMode": darkMode })}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SectionProfile darkMode={darkMode} reversed={true} profile={PROFILE} />
      <SectionProfile darkMode={darkMode} profile={PROFILE} />
      <SectionProjects darkMode={darkMode} projects={PROJECTS} />
      <SectionProjects
        darkMode={darkMode}
        reversed={true}
        projects={PROJECTS}
      />
      {PROJECTS.map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 0)}
          darkMode={darkMode}
        />
      ))}
      <SectionSkills darkMode={darkMode} />
      <SectionSkills darkMode={darkMode} reversed={true} />
      <SectionContact darkMode={darkMode} />
      <SectionContact darkMode={darkMode} reversed={true} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
