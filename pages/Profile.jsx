"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionPortrait from "../components/SectionPortrait/SectionPortrait.jsx";

const PORTRAIT = {
  image: "/images/ME.jpeg",
  title: "Thomas Gouvrillon, développeur javascript",
  tags: ["freelance", "développement", "indé"],
};

const Profile = () => {
  return (
    <Layout>
      <SectionPortrait portrait={PORTRAIT} />
    </Layout>
  );
};

export default Profile;
