import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '@nhost/react-auth';

const AuthGate = ({ children }) => {
  const { signedIn } = useAuth();

  if (signedIn === null) {
    return <div>Loading...</div>;
  }

  if (!signedIn) {
    return <Redirect to='/login' />;
  }

  return children;
};

export default AuthGate;
