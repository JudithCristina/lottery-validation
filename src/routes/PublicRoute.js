import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { autenticado, authReady } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      component={(props) => (
        authReady &&
        ((autenticado === false) ?
          <Component {...props} /> : <Redirect to='/' />)
      )}
    />
  );
};

export default PublicRoute;