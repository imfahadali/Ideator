import * as React from "react";
import authContext from "./auth-context";
import { AuthContextInterface } from "./auth-context";
import { toast } from "react-toastify";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = React.useState<string | null>(initialToken);
  const userIsLoggedIn = !!token;

  const handleLogin = (token: string) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged Out");
  };

  const authContextValues: AuthContextInterface = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <authContext.Provider value={authContextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
