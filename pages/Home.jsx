"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import SectionPortrait from "../components/SectionPortrait/SectionPortrait.jsx";
import SectionPresentation from "../components/SectionPresentation/SectionPresentation.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import SectionExperience from "../components/SectionExperience/SectionExperience.jsx";
import isEqual from "lodash/isEqual";

const PORTRAIT = {
  image: "/images/ME.jpeg",
  title: "Thomas Gouvrillon, développeur javascript",
  tags: ["freelance", "développement", "indé"],
};

const PRESENTATION = {
  title: "Présentation",
  paragraphs: [
    "Passionné de développement JavaScript, spécialisé dans React, je suis actuellement à la recherche de nouveaux défis passionnants en tant que freelance.",
    "Avec une solide expérience dans la création d'interfaces utilisateur dynamiques et réactives, j'ai travaillé sur une variété de projets qui vont de la conception de composants réutilisables à la mise en place d'architectures front-end robustes.",
    "Maîtrisant les dernières technologies et les meilleures pratiques de développement, je m'efforce toujours de produire un code propre, efficace et évolutif. Mon objectif est de créer des expériences utilisateur exceptionnelles tout en respectant les délais et les exigences du projet.",
    "Que vous ayez besoin de développer une application web, d'optimiser une interface existante ou de résoudre des problèmes complexes, je suis prêt à collaborer avec vous pour concrétiser vos idées.",
    "Actuellement ouvert aux opportunités de freelance, je suis impatient de discuter de la manière dont je peux contribuer à la réussite de votre projet. N'hésitez pas à me contacter pour discuter de vos besoins et explorer comment nous pouvons travailler ensemble.",
  ],
  softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
  tags: ["front", "back", "design", "architecture"],
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
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
  PROJECT_2,
];

const PROFILE = {
  image: "/images/ME.jpeg",
  title: "Thomas Gouvrillon, développeur javascript",
  href: "profil",
  tags: ["freelance", "développement", "indé"],
  technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
  description:
    "Développeur expérimenté, je transforme vos idées en sites web percutants. Expert en HTML, CSS, et JavaScript, je crée des expériences utilisateurs modernes et réactives. Parlons de votre projet et faisons-le décoller.",
};

const CLIENT_VALWIN = {
  name: "Valwin",
  logo: "/images/logo/VALWIN.png",
  tags: ["pharmacie", "e-sante"],
};

const EXPERIENCE = {
  client: CLIENT_VALWIN,
  experiences: [
    {
      title: "Directeur Produit",
      city: "Nantes",
      date: "2020",
      technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
      description:
        "Le Directeur Produit est le chef d'orchestre de l'innovation dans le domaine de la technologie. Il allie vision stratégique, expertise technique et compréhension du marché pour créer des produits révolutionnaires.",
      tags: ["front", "back", "design", "architecture"],
      softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
    },
    {
      title: "Directeur Produit",
      city: "Nantes",
      date: "2020",
      technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
      description:
        "Le Directeur Produit est le chef d'orchestre de l'innovation dans le domaine de la technologie. Il allie vision stratégique, expertise technique et compréhension du marché pour créer des produits révolutionnaires.",
      tags: ["front", "back", "design", "architecture"],
      softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
    },
    {
      title: "Directeur Produit",
      city: "Nantes",
      date: "2020",
      technos: ["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE"],
      description:
        "Le Directeur Produit est le chef d'orchestre de l'innovation dans le domaine de la technologie. Il allie vision stratégique, expertise technique et compréhension du marché pour créer des produits révolutionnaires.",
      tags: ["front", "back", "design", "architecture"],
      softs: ["GESTION", "TEAM", "LEADER", "COMMUNICATION", "MENTORING"],
    },
  ],
};

const Home = () => {
  return (
    <Layout>
      <SectionExperience experience={EXPERIENCE} />
      <SectionExperience experience={EXPERIENCE} reversed={true} />
      <SectionPortrait portrait={PORTRAIT} />
      <SectionPortrait portrait={PORTRAIT} reversed={true} />
      <SectionProfile profile={PROFILE} />
      <SectionProfile profile={PROFILE} reversed={true} />
      {PROJECTS.filter((project) => project.star).map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionProjects projects={PROJECTS} />
      <SectionProjects projects={PROJECTS} reversed={true} />
      <SectionPresentation presentation={PRESENTATION} />
      <SectionPresentation presentation={PRESENTATION} reversed={true} />
      <SectionSkills />
      <SectionSkills reversed={true} />
      <SectionContact />
      <SectionContact reversed={true} />
    </Layout>
  );
};

export default Home;
