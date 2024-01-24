"use client";

import React, { useState } from "react";
import "./Home.css";
import SectionTitle2 from "../../components/SectionTitle2/SectionTitle2.jsx";
import SectionProject from "../../components/SectionProject/SectionProject.jsx";
import SectionSkills from "../../components/SectionSkills/SectionSkills.jsx";
import SectionContact from "../../components/SectionContact/SectionContact.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import isEqual from "lodash/isEqual";
import classnames from "classnames";

const HOME_CONST_PROJECT = {
  image: "/images/screenshots/AMAZON.png",
  title: "E-shop pour site",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "NODE"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
};

const HOME_CONST_PROJECT_2 = {
  image: "/images/screenshots/APTIPHAR.png",
  title: "E-shop pour site",
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
      <SectionTitle2
        darkMode={darkMode}
        text="Derniers projets"
        reversed={true}
      />
      {HOME_CONST_PROJECTS.map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
          darkMode={darkMode}
        />
      ))}
      <SectionTitle2 darkMode={darkMode} text="Compétences" />
      <SectionSkills darkMode={darkMode} reversed={true} />
      <SectionSkills darkMode={darkMode} />
      <SectionTitle2 darkMode={darkMode} text="Contact" reversed={true} />
      <SectionContact darkMode={darkMode} />
      <SectionContact darkMode={darkMode} reversed={true} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
