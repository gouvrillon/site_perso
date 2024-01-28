"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import isEqual from "lodash/isEqual";
import { PROFILE, PROJECTS, HEADER_CONST } from "../const.js";

const Home = () => {
  return (
    <Layout headerConst={HEADER_CONST}>
      <SectionProjects projects={PROJECTS} reversed={true} />
      {PROJECTS.map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionProfile profile={PROFILE} />
      <SectionContact reversed={true} />
    </Layout>
  );
};

export default Home;
