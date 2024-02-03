import React from "react";
import Home from "../pages/Home.jsx";
import profile from "../const/profile.js";
import nav from "../const/nav.js";
import projects from "../const/projects.js";
import { getDarkModeCookie } from "./utils.js";

export const metadata = {
  metadataBase: new URL("https://www.technica.dev"),
  title: "Accueil",
  description:
    "Accueil du site de Thomas Gouvrillon, développeur javascript freelance",
  openGraph: {
    title: "Accueil",
    description:
      "Accueil du site de Thomas Gouvrillon, développeur javascript freelance",
    url: "https://www.technica.dev",
    siteName: "Thomas Gouvrillon Développeur Javascript",
    images: "/images/utils/OG.webp",
    locale: "fr_FR",
    type: "website",
  },
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
