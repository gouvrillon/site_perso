import React from "react";
import Projects from "../../pages/Projects.jsx";
import { getDarkModeCookie } from "../utils.js";
import profile from "../../const/profile.js";
import nav from "../../const/nav.js";
import projects from "../../const/projects.js";

export const metadata = {
  metadataBase: new URL("https://www.technica.dev"),
  title: "Technica Dev - Projets",
  description: "Projets de Thomas Gouvrillon, développeur javascript",
  openGraph: {
    title: "Technica Dev - Projets",
    description: "Projets de Thomas Gouvrillon, développeur javascript",
    url: "https://www.technica.dev",
    siteName: "Thomas Gouvrillon Développeur Javascript",
    images: "/images/utils/OG.webp",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technica Dev - Projets",
    description: "Projets de Thomas Gouvrillon, développeur javascript",
    creator: "Thomas Gouvrillon",
    images: ["/images/utils/OG.webp"],
  },
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
