import React from "react";
import "./Field.css";
import { string, bool, object, func } from "prop-types";
import classnames from "classnames";
import Icon from "../Icon/Icon.jsx";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

const Field = ({
  onChange,
  onBlur,
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
  type,
  value,
  onFocus,
}) => {
  return (
    <div className={`Field ${className}`}>
      <label
        htmlFor={name}
        className={classnames("Field__label", {
          "Field__label--darkMode": darkMode,
        })}
      >
        <span
          className={classnames("Field__icon", {
            "Field__icon--darkMode": darkMode,
          })}
        >
          <Icon icon={icon} />
        </span>
        {`${label}${required ? " *" : ""}`}
        <span
          className={classnames("Field__error", {
            "Field__error--display":
              !isEmpty(get(errors, name)) && get(touched, name),
            "Field__error--darkMode": darkMode,
          })}
        >
          {get(errors, name)}
        </span>
      </label>
      <input
        id={name}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classnames("Field__input", {
          "Field__input--reversed": !darkMode && reversed,
          "Field__input--darkMode": darkMode && !reversed,
          "Field__input--darkMode--reversed": darkMode && reversed,
        })}
      />
    </div>
  );
};

Field.propTypes = {
  onChange: func.isRequired,
  onFocus: func.isRequired,
  onBlur: func.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  icon: string.isRequired,
  errors: object.isRequired,
  touched: object.isRequired,
  value: string.isRequired,
  darkMode: bool,
  reversed: bool,
  required: bool,
  className: string,
};

export default Field;
