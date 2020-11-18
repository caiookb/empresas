import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const headers = JSON.parse(localStorage.getItem("headers"));

  if (!headers) {
    return <Redirect to={{ pathname: "/login" }} />;
  } else {
    return <Route {...rest} component={Component} />;
  }
};

export default PrivateRoute;
