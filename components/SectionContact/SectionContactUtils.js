import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

const getInitialValues = () => {
  return {
    name: "",
    mail: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  };
};

const validate = (values) => {
  const errors = {};
  if (isEmpty(get(values, "mail"))) {
    errors.mail = "Obligatoire";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
    errors.mail = "Incorrect";
  }
  if (isEmpty(get(values, "message"))) {
    errors.message = "Obligatoire";
  }
  return errors;
};

const post = async (setSubmitting, setMessage, resetForm) => {
  setSubmitting(true);
  // eslint-disable-next-line no-undef
  emailjs.init("O6nkgmPokVNXh4e6k");
  const serviceID = "default_service";
  const templateID = "template_0duji4e";
  // eslint-disable-next-line no-undef
  const response = await emailjs.sendForm(
    serviceID,
    templateID,
    "#SectionContact__form"
  );
  if (isEqual(get(response, "status"), 200)) {
    setSubmitting(false);
    setMessage("Message envoyé");
    resetForm();
  } else {
    setSubmitting(false);
    setMessage("Une erreur est apparue");
  }
};

export { getInitialValues, validate, post };
