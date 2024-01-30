import React from "react";
import "./Loading.css";
import { string, bool } from "prop-types";

const Loading = ({ className }) => {
  return (
    <img className={`Loading ${className}`} src="/images/utils/LOADING.gif" />
  );
};

Loading.propTypes = {
  label: string.isRequired,
  darkMode: bool,
  className: string,
};

export default Loading;
