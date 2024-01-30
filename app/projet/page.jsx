import React from "react";
import Project from "../../pages/Project.jsx";
import { getDarkModeCookie } from "../utils.js";

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return <Project darkModeCookie={darkModeCookie} />;
};

export default Page;
