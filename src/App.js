import React from 'react';
import AppRouter from './routes/AppRouter';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
      <AppRouter />
    </AuthState>
  );

}

export default App;
