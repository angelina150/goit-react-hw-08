import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalis email adress")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Passeord length must be a least 8 characters")
      .required("Password is required"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          alert("User with this email already exists");
        }
      });

    actions.resetForm();
  };
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
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
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
