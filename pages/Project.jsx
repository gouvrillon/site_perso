"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionIntro from "../components/SectionIntro/SectionIntro.jsx";
import SectionDetails from "../components/SectionDetails/SectionDetails.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import { PROJECT_1, PROJECTS, PROFILE, NAV_CONST } from "../const.js";

const Project = () => {
  return (
    <Layout navConst={NAV_CONST}>
      <SectionIntro project={PROJECT_1} />
      <SectionDetails project={PROJECT_1} reversed={true} />
      <SectionProjects projects={PROJECTS} />
      <SectionProfile profile={PROFILE} reversed={true} />
      <SectionContact />
    </Layout>
  );
};

export default Project;
