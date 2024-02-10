"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionIntro from "../components/SectionIntro/SectionIntro.jsx";
import SectionDetails from "../components/SectionDetails/SectionDetails.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import { bool, object, arrayOf } from "prop-types";

const Project = ({
  darkModeCookie = false,
  nav = {},
  projects = [],
  profile = {},
  project = {},
}) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionIntro project={project} />
      <SectionDetails project={project} reversed={true} />
      <SectionProjects projects={projects} nav={nav} />
      <SectionProfile profile={profile} reversed={true} />
      <SectionContact />
    </Layout>
  );
};

Project.propTypes = {
  darkModeCookie: bool.isRequired,
  nav: object.isRequired,
  profile: object.isRequired,
  project: object.isRequired,
  projects: arrayOf(object).isRequired,
};

export default Project;
