import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppState} from '../redux/store';

export const PrivateRoute = (props: RouteProps) => {
  const loggedIn = useSelector<AppState, boolean>(
    state => state.authReducer.loggedIn
  );
  return loggedIn ? <Route {...props} /> : <Redirect to="/forbidden" />;
};
