import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { autenticado, authReady } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      component={(props) => (authReady === false ? (
        <div className='box-loading'>
          <div className='lds-ellipsis'>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : autenticado === true ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      ))}
    />
  );
};

export default PrivateRoute;
