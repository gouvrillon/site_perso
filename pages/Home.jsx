"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import isEqual from "lodash/isEqual";

const PROFILE = {
  image: "/images/ME.jpeg",
  title: "Thomas Gouvrillon, développeur javascript",
  href: "profil",
  tags: ["freelance", "développement", "indé"],
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
  softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
  description:
    "Développeur expérimenté, je transforme vos idées en sites web percutants. Expert en HTML, CSS, et JavaScript, je crée des expériences utilisateurs modernes et réactives. Parlons de votre projet et faisons-le décoller.",
};

const PROJECT_1 = {
  image: "/images/screenshots/AMAZON.png",
  title: "Refonte complète de backoffice",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "NODE"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
  star: true,
};

const PROJECT_2 = {
  image: "/images/screenshots/APTIPHAR.png",
  title: "Implémentation e-commerce sur site existant",
  description:
    "Implémentation e-commerce sur site existant. Gestion dynamique du catalogue depuis un backoffice vers Algolia.",
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
  tags: ["front", "back", "design", "architecture"],
  href: "/project",
  star: false,
};

const PROJECTS = [
  PROJECT_1,
  PROJECT_1,
  PROJECT_1,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
];

const Home = () => {
  return (
    <Layout>
      <SectionProfile profile={PROFILE} />
      <SectionProjects projects={PROJECTS} reversed={true} />
      {PROJECTS.filter((project) => project.star).map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionContact reversed={true} />
    </Layout>
  );
};

export default Home;
