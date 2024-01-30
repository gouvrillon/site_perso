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
import isArray from "lodash/isArray";
import isEqual from "lodash/isEqual";
import get from "lodash/get";

const Profile = ({ darkModeCookie, nav, profile, projects }) => {
  return (
    <Layout nav={nav} darkModeCookie={darkModeCookie}>
      <SectionPortrait profile={profile} />
      <SectionPresentation profile={profile} reversed={true} />
      {isArray(get(profile, "experiences")) &&
        profile.experiences.map((experience, index) => (
          <SectionExperience
            key={index}
            experience={experience}
            reversed={isEqual(index % 2, 1)}
          />
        ))}
      <SectionSkills profile={profile} />
      <SectionProjects projects={projects} reversed={true} />
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
