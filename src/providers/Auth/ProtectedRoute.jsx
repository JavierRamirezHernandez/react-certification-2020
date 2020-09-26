import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './Auth.provider';

const ProtectedRoute = (props) => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
