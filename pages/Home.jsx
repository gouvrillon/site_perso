"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import isEqual from "lodash/isEqual";
import { PROFILE, PROJECTS, NAV_CONST } from "../const.js";

const Home = () => {
  return (
    <Layout navConst={NAV_CONST}>
      <SectionProfile profile={PROFILE} />
      <SectionProjects projects={PROJECTS} reversed={true} />
      {PROJECTS.filter((project) => project.star).map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionSkills />
      <SectionContact reversed={true} />
    </Layout>
  );
};

export default Home;
