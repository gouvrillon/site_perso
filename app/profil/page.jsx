import React from "react";
import Profile from "../../pages/Profile.jsx";
import { getDarkModeCookie } from "../utils.js";

const Page = () => {
  const darkModeCookie = getDarkModeCookie();
  return <Profile darkModeCookie={darkModeCookie} />;
};

export default Page;
