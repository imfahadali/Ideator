import React from "react";
import { toast } from "react-toastify";
import SignUp from "../components/Auth/SignUp/SignUp";
import { SignUpValues } from "../components/Auth/SignUp/SignUp";
const SignUpPage: React.FC = () => {
  const signup = (values: SignUpValues) => {
    console.log(values);

    const signingup = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxMJEXtAulJgLE6xYcFr80c7c97kp-g1s",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          }),
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.error.message);
        throw Error(`An Error has occured ${res.status}`);
      }
      toast.success("Signed Up");
    };
    try {
      signingup();
    } catch (error) {
      console.log(error);
    }
  };

  return <SignUp submitForm={signup} />;
};

export default SignUpPage;
