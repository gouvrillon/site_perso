import React from "react";
import Projects from "../../pages/Projects.jsx";
import { getDarkModeCookie } from "../utils.js";
import profile from "../../const/profile.js";
import nav from "../../const/nav.js";
import projects from "../../const/projects.js";

export const metadata = {
  title: "Projets",
  description:
    "Projets de Thomas Gouvrillon, développeur javascript Freelance à Nantes",
};

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return (
    <Projects
      darkModeCookie={darkModeCookie}
      profile={profile}
      nav={nav}
      projects={projects}
    />
  );
};

export default Page;
