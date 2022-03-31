import React from "react";
import { FormikProps, Form, withFormik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "../../Ideas/AddIdea/AddNewIdea.module.css";

export interface AddNewIdeaValues {
  idea: string;
  ideator: string;
}

interface AddNewIdeaProps {
  submitForm: (params: AddNewIdeaValues) => void;
}
const InnerForm = (props: AddNewIdeaProps & FormikProps<AddNewIdeaValues>) => {
  return (
    <div className={styles["newIdea-wrapper"]}>
      <div className={styles["newIdea-form-container"]}>
        <h1>Add Idea</h1>
        <Form>
          <label htmlFor="idea">Idea</label>
          <Field name="idea" type="idea" id="idea" />

          <ErrorMessage name="idea" className={styles.error} component="div" />

          <label htmlFor="ideator">Ideator</label>
          <Field name="ideator" type="ideator" id="ideator" />
          <ErrorMessage
            name="ideator"
            className={styles.error}
            component="div"
          />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
};

const AddNewIdeaSchema = Yup.object().shape({
  idea: Yup.string()
    .required("Add Idea")
    .min(15, "Too Short")
    .max(60, "Too Long"),
  ideator: Yup.string()
    .required("Add Ideator")
    .min(3, "Name Too Short")
    .max(20, "Name Too Long"),
});

const SignIn = withFormik<AddNewIdeaProps, AddNewIdeaValues>({
  mapPropsToValues: () => ({
    idea: "",
    ideator: "",
  }),
  validationSchema: AddNewIdeaSchema,

  handleSubmit: (values: AddNewIdeaValues, { props, resetForm }) => {
    resetForm();
    props.submitForm(values);
  },
})(InnerForm);

export default SignIn;
