"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionPortrait from "../components/SectionPortrait/SectionPortrait.jsx";
import SectionPresentation from "../components/SectionPresentation/SectionPresentation.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";

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
};

const Profile = () => {
  return (
    <Layout>
      <SectionPortrait portrait={PORTRAIT} />
      <SectionPresentation presentation={PRESENTATION} reversed={true} />
      <SectionSkills />
      <SectionContact reversed={true} />
    </Layout>
  );
};

export default Profile;
