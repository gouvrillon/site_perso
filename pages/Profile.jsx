"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionPortrait from "../components/SectionPortrait/SectionPortrait.jsx";
import SectionPresentation from "../components/SectionPresentation/SectionPresentation.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import SectionExperience from "../components/SectionExperience/SectionExperience.jsx";
import {
  PORTRAIT,
  PRESENTATION,
  EXPERIENCE,
  PROJECTS,
  NAV_CONST,
} from "../const.js";

const Profile = () => {
  return (
    <Layout navConst={NAV_CONST}>
      <SectionPortrait portrait={PORTRAIT} />
      <SectionPresentation presentation={PRESENTATION} reversed={true} />
      <SectionExperience experience={EXPERIENCE} />
      <SectionExperience experience={EXPERIENCE} reversed={true} />
      <SectionSkills />
      <SectionProjects projects={PROJECTS} reversed={true} />
      <SectionContact />
    </Layout>
  );
};

export default Profile;
