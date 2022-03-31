import * as React from "react";

export interface AuthContextInterface {
  token: string | null;
  isLoggedIn: boolean;
  login: (param: string) => void;
  logout: () => void;
}

const authContext = React.createContext<AuthContextInterface>({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export default authContext;
