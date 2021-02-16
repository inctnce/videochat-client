import React from "react";
import { Redirect } from "react-router";
import UserLS from "../LocalStorage/user";
import PATH from "../PATH";

const Protected = (Component: any) => {
  const NewComponent = (props: any) => {
    if (UserLS.get().isAuthenticated) {
      return <Component {...props} />;
    }
    return <Redirect to={PATH.LOGIN} />;
  };

  return NewComponent;
};

export default Protected;
