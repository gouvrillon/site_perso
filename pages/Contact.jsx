"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import { PROFILE, PROJECTS, HEADER_CONST } from "../const.js";

const Contact = () => {
  return (
    <Layout headerConst={HEADER_CONST}>
      <SectionContact />
      <SectionProfile profile={PROFILE} reversed={true} />
      <SectionProjects projects={PROJECTS} />
    </Layout>
  );
};

export default Contact;
