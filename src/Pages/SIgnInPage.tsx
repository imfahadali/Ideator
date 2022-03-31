import React, { useContext } from "react";
import SignIn from "../components/Auth/SignIn/SignIn";
import { SignInValues } from "../components/Auth/SignIn/SignIn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authContext from "../store/auth-context";

const SignInPage: React.FC = () => {
  const authCtxt = useContext(authContext);

  const signin = (values: SignInValues) => {
    const signingin = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxMJEXtAulJgLE6xYcFr80c7c97kp-g1s",
        {
          method: "POST",
          body: JSON.stringify({
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          }),
        }
      );
      console.log(res);
      const resData = await res.json();
      if (!res.ok) {
        toast.error(resData.error.message);
        throw Error(`An Error has occured ${res.status}`);
      }
      toast.success("Signed In");
      console.log(resData);
      authCtxt.login(resData.idToken);

      // return await res.json();
    };

    try {
      signingin();
    } catch (error) {
      console.log(error);
    }
  };

  return <SignIn submitForm={signin} />;
};

export default SignInPage;
