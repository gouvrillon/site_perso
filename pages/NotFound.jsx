"use client";

import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SectionNotFound from "../components/SectionNotFound/SectionNotFound.jsx";
import { NOT_FOUND, HEADER_CONST } from "../const.js";

const Home = () => {
  return (
    <Layout headerConst={HEADER_CONST}>
      <SectionNotFound notFound={NOT_FOUND} />
    </Layout>
  );
};

export default Home;
