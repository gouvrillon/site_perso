"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionProject from "../components/SectionProject/SectionProject.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import isEqual from "lodash/isEqual";
import isArray from "lodash/isArray";
import { bool, object, arrayOf } from "prop-types";

const Home = ({
  darkModeCookie = false,
  nav = {},
  projects = [],
  profile = {},
}) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionProfile profile={profile} />
      <SectionProjects projects={projects} reversed={true} />
      {isArray(projects) &&
        projects
          .filter((project) => project.star)
          .map((project, index) => (
            <SectionProject
              key={index}
              project={project}
              reversed={isEqual(index % 2, 1)}
            />
          ))}
      <SectionSkills profile={profile} reversed={true} />
      <SectionContact />
    </Layout>
  );
};

Home.propTypes = {
  darkModeCookie: bool.isRequired,
  profile: object.isRequired,
  projects: arrayOf(object).isRequired,
  nav: object.isRequired,
};

export default Home;
