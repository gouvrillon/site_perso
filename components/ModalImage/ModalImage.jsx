import React from "react";
import "./ModalImage.css";
import { string } from "prop-types";

const ModalImage = ({ src }) => {
  return <img src={src} className="ModalImage" />;
};

ModalImage.propTypes = {
  src: string.isRequired,
};

export default ModalImage;
