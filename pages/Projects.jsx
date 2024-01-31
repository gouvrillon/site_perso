"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import isEqual from "lodash/isEqual";
import isArray from "lodash/isArray";
import { bool, object, arrayOf } from "prop-types";

const Projects = ({
  darkModeCookie = false,
  nav = {},
  projects = [],
  profile = {},
}) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionProjects projects={projects} reversed={true} />
      {isArray(projects) &&
        projects.map((project, index) => (
          <SectionProject
            key={index}
            project={project}
            reversed={isEqual(index % 2, 1)}
          />
        ))}
      <SectionProfile profile={profile} />
      <SectionContact reversed={true} />
    </Layout>
  );
};

Projects.propTypes = {
  darkModeCookie: bool.isRequired,
  profile: object.isRequired,
  projects: arrayOf(object).isRequired,
  nav: object.isRequired,
};

export default Projects;
