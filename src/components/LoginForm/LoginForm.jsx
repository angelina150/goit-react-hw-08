import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useState } from "react";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalis email adress")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Passeord length must be a least 8 characters")
      .required("Password is required"),
  });
  const [globalError, setGlobalError] = useState("");
  const initialValues = {
    email: "",
    password: "",
  };
  // const handleSubmit = (values, actions) => {
  //   dispatch(logIn(values));
  //   actions.resetForm();
  // };
  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      actions.resetForm();
      setGlobalError("");
    } catch (e) {
      console.log(e);
      setGlobalError("Account not found or incorrect credentials.");
    }
  };
  return (
    <div>
      <h2>Log in</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={css.form}>
          {globalError && <div className={css.globalError}>{globalError}</div>}
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
