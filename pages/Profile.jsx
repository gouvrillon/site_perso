"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionContact from "../components/SectionContact/SectionContact.jsx";
import SectionProjects from "../components/SectionProjects/SectionProjects.jsx";
import SectionPortrait from "../components/SectionPortrait/SectionPortrait.jsx";
import SectionPresentation from "../components/SectionPresentation/SectionPresentation.jsx";
import SectionSkills from "../components/SectionSkills/SectionSkills.jsx";
import SectionExperience from "../components/SectionExperience/SectionExperience.jsx";
import { bool, object, arrayOf } from "prop-types";
import isEqual from "lodash/isEqual";
import get from "lodash/get";

const Profile = ({
  darkModeCookie = false,
  nav = {},
  projects = [],
  profile = {},
}) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionPortrait profile={profile} nav={nav} />
      <SectionPresentation profile={profile} reversed={true} />
      {get(profile, "experiences", []).map((experience, index) => (
        <SectionExperience
          key={index}
          experience={experience}
          reversed={isEqual(index % 2, 1)}
        />
      ))}
      <SectionSkills profile={profile} />
      <SectionProjects projects={projects} reversed={true} nav={nav} />
      <SectionContact />
    </Layout>
  );
};

Profile.propTypes = {
  darkModeCookie: bool.isRequired,
  nav: object.isRequired,
  profile: object.isRequired,
  projects: arrayOf(object).isRequired,
};

export default Profile;
