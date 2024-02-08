import React, { useState, useEffect } from "react";
import { node, func, bool, string } from "prop-types";
import "./Modal.css";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";

const Modal = ({ darkMode, setModal, children, title }) => {
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    setDisplayed(true);
  }, [children]);

  return (
    <div
      className={classnames("Modal", {
        "Modal--displayed": displayed,
      })}
    >
      <div
        className={classnames("Modal__background", {
          "Modal__background--darkMode": darkMode,
        })}
        onClick={() => setModal(null)}
      ></div>
      <div
        className={classnames("Modal__content", {
          "Modal__content--darkMode": darkMode,
        })}
      >
        <div className="Modal__content__header">
          <div
            className={classnames("Modal__content__title", {
              "Modal__content__title--darkMode": darkMode,
            })}
          >
            {title}
          </div>
          <div
            className={classnames("Modal__content__icon", {
              "Modal__content__icon--darkMode": darkMode,
            })}
            onClick={() => setModal(null)}
          >
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
