import React from "react";
import Projects from "../../pages/Projects.jsx";
import { getDarkModeCookie } from "../utils.js";

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return <Projects darkModeCookie={darkModeCookie} />;
};

export default Page;
