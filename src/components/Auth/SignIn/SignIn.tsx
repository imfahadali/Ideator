import React from "react";
import { FormikProps, Form, withFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "../../Ideas/AddIdea/AddNewIdea.module.css";

export interface SignInValues {
  email: string;
  password: string;
}

interface SignInProps {
  submitForm: (params: SignInValues) => void;
}
const InnerForm = (props: SignInProps & FormikProps<SignInValues>) => {
  const { isValid } = props;
  console.log(isValid);
  return (
    <div className={styles["newIdea-wrapper"]}>
      <div className={styles["newIdea-form-container"]}>
        <h1>Sign In</h1>
        <Form>
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

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Email not valid").required("Email required"),
  password: Yup.string().required("Password required"),
});

const SignIn = withFormik<SignInProps, SignInValues>({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: SignInSchema,

  handleSubmit: (values: SignInValues, { props, resetForm }) => {
    resetForm();
    props.submitForm(values);
  },
})(InnerForm);

export default SignIn;
