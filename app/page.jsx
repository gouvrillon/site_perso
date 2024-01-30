import React from "react";
import Home from "../pages/Home.jsx";
import { getDarkModeCookie } from "./utils.js";

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return <Home darkModeCookie={darkModeCookie} />;
};

export default Page;
