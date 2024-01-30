import React from "react";
import "./Loading.css";
import { string } from "prop-types";

const Loading = ({ className }) => {
  return (
    <img className={`Loading ${className}`} src="/images/utils/LOADING.gif" />
  );
};

Loading.propTypes = {
  className: string,
};

export default Loading;
