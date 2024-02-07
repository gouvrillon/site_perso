import React from "react";
import { node, func, bool, string } from "prop-types";
import "./Modal.css";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Modal = ({ darkMode, setModal, children, title }) => {
  return (
    <div className="Modal">
      <div className="Modal__background" onClick={() => setModal(null)}></div>
      <div
        className={classnames("Modal__content", {
          "Modal__content--darkMode": darkMode,
        })}
      >
        <div className="Modal__content__header">
          <div className="Modal__content__title">{title}</div>
          <div className="Modal__content__icon" onClick={() => setModal(null)}>
            <Icon icon="CROSS" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  darkMode: bool.isRequired,
  setModal: func.isRequired,
  children: node.isRequired,
  title: string.isRequired,
};

export default Modal;
