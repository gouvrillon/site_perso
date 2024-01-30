import React from "react";
import Contact from "../../pages/Contact.jsx";
import { getDarkModeCookie } from "../utils.js";
import profile from "../../const/profile.js";
import nav from "../../const/nav.js";
import projects from "../../const/projects.js";

export const metadata = {
  title: "Contact",
  description:
    "Contact de Thomas Gouvrillon, développeur javascript Freelance à Nantes",
};

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return (
    <Contact
      darkModeCookie={darkModeCookie}
      profile={profile}
      nav={nav}
      projects={projects}
    />
  );
};

export default Page;
