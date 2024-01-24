import React from "react";
import { Rubik } from "next/font/google";
import { node } from "prop-types";
import "./globals.css";

const rubik = Rubik({
  weight: ["300", "400", "500", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Homepage",
  description: "Homepage",
};

const Layout = ({ children }) => {
  return (
    <html lang="fr">
      <body className={rubik.className}>{children}</body>
    </html>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
