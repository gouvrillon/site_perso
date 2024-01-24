import React, { useState } from "react";
import "./SectionContact.css";
import { bool } from "prop-types";
import classnames from "classnames";
import Field from "../Field/Field.jsx";
import Area from "../Area/Area.jsx";
import Button from "../Button/Button.jsx";
import { Formik } from "formik";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { getInitialValues, validate, post } from "./SectionContactUtils";

const SectionContact = ({ darkMode, reversed }) => {
  const [message, setMessage] = useState(false);
  return (
    <div
      className={classnames("SectionContact", {
        "SectionContact--reversed": !darkMode && reversed,
        "SectionContact--darkMode": darkMode && !reversed,
        "SectionContact--darkMode--reversed": darkMode && reversed,
      })}
    >
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <Formik
        initialValues={getInitialValues()}
        validate={(values) => validate(values)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          post(setSubmitting, setMessage, resetForm);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="SectionContact__form"
            id="SectionContact__form"
          >
            <div className="SectionContact__container">
              <Field
                reversed={reversed}
                darkMode={darkMode}
                className="SectionContact__input"
                label="Nom"
                errors={errors}
                touched={touched}
                placeholder="Barack Obama"
                name="name"
                icon="USER"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={get(values, "name", "")}
                onFocus={() => setMessage("")}
              />
              <Field
                reversed={reversed}
                darkMode={darkMode}
                className="SectionContact__input"
                label="Email"
                required={true}
                errors={errors}
                touched={touched}
                placeholder="barack.obama@usa.com"
                name="mail"
                icon="MAIL"
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                value={get(values, "mail", "")}
                onFocus={() => setMessage("")}
              />
              <Field
                reversed={reversed}
                darkMode={darkMode}
                className="SectionContact__input"
                label="Societé"
                errors={errors}
                touched={touched}
                placeholder="White House"
                name="company"
                icon="BUILDING"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={get(values, "company", "")}
                onFocus={() => setMessage("")}
              />
              <Field
                reversed={reversed}
                darkMode={darkMode}
                label="Téléphone"
                errors={errors}
                touched={touched}
                placeholder="06 11 22 33 44"
                name="phone"
                icon="PHONE"
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                value={get(values, "phone", "")}
                onFocus={() => setMessage("")}
              />
            </div>
            <div className="SectionContact__container">
              <Field
                reversed={reversed}
                darkMode={darkMode}
                label="Sujet"
                errors={errors}
                touched={touched}
                className="SectionContact__input"
                placeholder="Hello !"
                name="subject"
                icon="PEN"
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                value={get(values, "subject", "")}
                onFocus={() => setMessage("")}
              />
              <Area
                rows={8}
                reversed={reversed}
                darkMode={darkMode}
                required={true}
                errors={errors}
                touched={touched}
                className="SectionContact__input"
                label="Message"
                placeholder="Rencontrons nous !"
                name="message"
                icon="MESSAGE"
                onChange={handleChange}
                onBlur={handleBlur}
                value={get(values, "message", "")}
                onFocus={() => setMessage("")}
              />
              <div className="SectionContact__footer">
                <Button
                  label="Envoyer"
                  darkMode={darkMode}
                  reversed={reversed}
                  type="submit"
                  className="SectionContact__button"
                  icon="SEND"
                  disabled={isSubmitting}
                />
                <div
                  className={classnames("SectionContact__message", {
                    "SectionContact__message--display": !isEmpty(message),
                  })}
                >
                  {message}
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

SectionContact.propTypes = {
  darkMode: bool,
  reversed: bool,
};

export default SectionContact;
