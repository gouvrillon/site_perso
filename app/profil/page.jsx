import React from "react";
import Profile from "../../pages/Profile.jsx";
import { getDarkModeCookie } from "../utils.js";
import profile from "../../const/profile.js";
import nav from "../../const/nav.js";
import projects from "../../const/projects.js";

export const metadata = {
  title: "Profil",
  description:
    "Profil de Thomas Gouvrillon, développeur javascript Freelance à Nantes",
};

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return (
    <Profile
      darkModeCookie={darkModeCookie}
      profile={profile}
      nav={nav}
      projects={projects}
    />
  );
};

export default Page;
