"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionNotFound from "../components/SectionNotFound/SectionNotFound.jsx";
import { NOT_FOUND, NAV_CONST } from "../const.js";

const NotFound = () => {
  return (
    <Layout navConst={NAV_CONST}>
      <SectionNotFound notFound={NOT_FOUND} />
    </Layout>
  );
};

export default NotFound;
