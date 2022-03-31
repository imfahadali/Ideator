import React from "react";
import { ErrorMessage, Form, FormikProps, withFormik, Field } from "formik";
import styles from "../../Ideas/AddIdea/AddNewIdea.module.css";
import * as Yup from "yup";

export interface SignUpValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignUpProps {
  submitForm: (params: SignUpValues) => void;
}

const InnerForm = (props: SignUpProps & FormikProps<SignUpValues>) => {
  return (
    <div className={styles["newIdea-wrapper"]}>
      <div className={styles["newIdea-form-container"]}>
        <h1>Sign Up</h1>
        <Form className={styles.form}>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" id="firstName" />
          <ErrorMessage
            name="firstName"
            className={styles.error}
            component="div"
          />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" id="lastName" />
          <ErrorMessage
            name="lastName"
            className={styles.error}
            component="div"
          />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" id="email" />
          <ErrorMessage name="email" className={styles.error} component="div" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" id="password" />
          <ErrorMessage
            name="password"
            className={styles.error}
            component="div"
          />

          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Email not valid").required("Email required"),
  password: Yup.string()
    .required("Password required")
    .min(5, "Too Short Password"),
  firstName: Yup.string()
    .required("First Name required")
    .min(3, "Too Short")
    .max(10, "Too Long"),
  lastName: Yup.string()
    .required("Last Name required")
    .min(3, "Too Short")
    .max(10, "Too Long"),
});

const SignUp = withFormik<SignUpProps, SignUpValues>({
  mapPropsToValues: () => ({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  }),
  validationSchema: SignUpSchema,

  handleSubmit: (values, { props, resetForm, validateForm }) => {
    //Check if the strings are not empty
    resetForm();
    console.log(validateForm());
    validateForm();

    props.submitForm(values);

    console.log(values);
  },
})(InnerForm);

export default SignUp;
