import React from "react";
import { Redirect } from "react-router";
import userLS from "../LocalStorage/user";
import PATH from "../PATH";

const Protected = (Component: any) => {
  const NewComponent = (props: any) => {
    const doesExistRefreshToken: boolean = userLS.get() ? !!userLS.get()?.RefreshToken() : false;

    if (doesExistRefreshToken) {
      return <Component {...props} />;
    }
    return <Redirect to={PATH.LOGIN} />;
  };

  return NewComponent;
};

export default Protected;
