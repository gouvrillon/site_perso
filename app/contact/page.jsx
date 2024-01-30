import React from "react";
import Contact from "../../pages/Contact.jsx";
import { getDarkModeCookie } from "../utils.js";

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return <Contact darkModeCookie={darkModeCookie} />;
};

export default Page;
