import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)).unwrap();

    resetForm();
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <h2 className={s.title}> Sign In</h2>
          <div className={s.boxInput}>
            <label className={s.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="your.email@mail.com"
            />

            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.boxInput}>
            <label className={s.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className={s.input}
              type="password"
              name="password"
              id={passwordFieldId}
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>
          <button type="submit" className={s.button} disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
