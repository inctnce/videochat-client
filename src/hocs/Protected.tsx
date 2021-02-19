import React from "react";
import { Redirect } from "react-router";
import RefreshTokenLS from "../LocalStorage/refreshToken";
import PATH from "../PATH";

const Protected = (Component: any) => {
  const NewComponent = (props: any) => {
    if (RefreshTokenLS.get()) {
      return <Component {...props} />;
    }
    return <Redirect to={PATH.LOGIN} />;
  };

  return NewComponent;
};

export default Protected;
