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
  title: "Projet",
  description:
    "Projet de Thomas Gouvrillon, développeur javascript Freelance à Nantes",
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
