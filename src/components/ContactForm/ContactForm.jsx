import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        tel: values.tel,
      })
    )
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((event) => {
        console.log(event.message);
      });
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    tel: Yup.string().min(3).max(50).required(),
  });

  const nameFieldId = useId();
  const telFieldId = useId();

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        initialValues={{ name: "", number: "" }}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} id={nameFieldId} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="tel" className={s.input} id={telFieldId} />
            <ErrorMessage name="tel" component="span" className={s.error} />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
