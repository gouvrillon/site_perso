"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionNotFound from "../components/SectionNotFound/SectionNotFound.jsx";
import nav from "../const/nav.js";

const NotFound = () => {
  return (
    <Layout nav={nav}>
      <SectionNotFound nav={nav} />
    </Layout>
  );
};

export default NotFound;
