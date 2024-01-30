"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionProfile from "../components/SectionProfile/SectionProfile.jsx";
import { bool, object, arrayOf } from "prop-types";

const Contact = ({ darkModeCookie, profile, projects, nav }) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionContact />
      <SectionProfile profile={profile} reversed={true} />
      <SectionProjects projects={projects} />
    </Layout>
  );
};

Contact.propTypes = {
  darkModeCookie: bool.isRequired,
  profile: object.isRequired,
  projects: arrayOf(object).isRequired,
  nav: object.isRequired,
};

export default Contact;
