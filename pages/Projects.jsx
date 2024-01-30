"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import isEqual from "lodash/isEqual";
import { PROFILE, PROJECTS, NAV_CONST } from "../const.js";
import { bool } from "prop-types";

const Projects = ({ darkModeCookie }) => {
  return (
    <Layout navConst={NAV_CONST} darkModeCookie={darkModeCookie}>
      {PROJECTS.map((project, index) => (
        <SectionProject
          key={index}
          project={project}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionProjects projects={PROJECTS} />
      <SectionProfile profile={PROFILE} reversed={true} />
      <SectionContact />
    </Layout>
  );
};

Projects.propTypes = {
  darkModeCookie: bool.isRequired,
};

export default Projects;
