import React from "react";
import Project from "../../pages/Project.jsx";
import { getDarkModeCookie } from "../utils.js";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import { object } from "prop-types";
import projects from "../../const/projects.js";
import profile from "../../const/profile.js";
import nav from "../../const/nav.js";

export const metadata = {
  metadataBase: new URL("https://www.technica.dev"),
  title: "Technica Dev - Projet",
  description: "Projet de Thomas Gouvrillon, développeur javascript",
  openGraph: {
    title: "Technica Dev - Projet",
    description: "Projet de Thomas Gouvrillon, développeur javascript",
    url: "https://www.technica.dev",
    siteName: "Thomas Gouvrillon Développeur Javascript",
    images: "/images/utils/OG.webp",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technica Dev - Projet",
    description: "Projet de Thomas Gouvrillon, développeur javascript",
    creator: "Thomas Gouvrillon",
    images: ["/images/utils/OG.webp"],
  },
};

const Page = ({ searchParams }) => {
  const id = get(searchParams, "id");
  const project = projects.find((project) => isEqual(get(project, "id"), id));
  const projectsFiltered = projects.filter(
    (project) => !isEqual(get(project, "id"), id)
  );
  const darkModeCookie = getDarkModeCookie();
  return (
    <Project
      darkModeCookie={darkModeCookie}
      profile={profile}
      nav={nav}
      projects={projectsFiltered}
      project={project}
    />
  );
};

Page.propTypes = {
  searchParams: object.isRequired,
};

export default Page;
