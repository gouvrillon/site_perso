import React from "react";
import Home from "../pages/Home.jsx";
import profile from "../const/profile.js";
import nav from "../const/nav.js";
import projects from "../const/projects.js";
import { getDarkModeCookie } from "./utils.js";

export const metadata = {
  title: "Accueil",
  description:
    "Accueil du site de Thomas Gouvrillon, développeur javascript Freelance à Nantes",
};

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return (
    <Home
      darkModeCookie={darkModeCookie}
      profile={profile}
      projects={projects}
      nav={nav}
    />
  );
};

export default Page;
