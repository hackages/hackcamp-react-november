import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = props => {
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  return loggedIn ? <Route {...props} /> : <Redirect to="/forbidden" />;
};
