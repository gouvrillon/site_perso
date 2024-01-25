import React from "react";
import "./Area.css";
import { string, bool, number, func, object } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

const Area = ({
  onChange,
  onBlur,
  rows,
  name,
  reversed,
  darkMode,
  className,
  label,
  required,
  placeholder,
  errors,
  touched,
  icon,
  value,
  onFocus,
}) => {
  return (
    <div className={`Area ${className}`}>
      <label
        htmlFor={name}
        className={classnames("Area__label", {
          "Area__label--darkMode": darkMode,
        })}
      >
        <span
          className={classnames("Area__icon", {
            "Area__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={icon} />
        </span>
        {label}
        {required && (
          <span
            className={classnames("Area__required", {
              "Area__required--darkMode": darkMode,
            })}
          >
            {" "}
            *
          </span>
        )}
        <span
          className={classnames("Area__error", {
            "Area__error--display":
              !isEmpty(get(errors, name)) && get(touched, name),
            "Area__error--darkMode": darkMode,
          })}
        >
          {get(errors, name)}
        </span>
      </label>
      <textarea
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        id={name}
        value={value}
        name={name}
        onFocus={onFocus}
        placeholder={placeholder}
        className={classnames("Area__input", {
          "Area__input--reversed": !darkMode && reversed,
          "Area__input--darkMode": darkMode && !reversed,
          "Area__input--darkMode--reversed": darkMode && reversed,
        })}
      />
    </div>
  );
};

Area.propTypes = {
  onChange: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  rows: number.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  label: string.isRequired,
  placeholder: string.isRequired,
  icon: string.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  darkMode: bool,
  reversed: bool,
  required: bool,
  className: string,
};

export default Area;
