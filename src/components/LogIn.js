import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogInButton = () => {
  const { loginWithRedirect } = useAuth0()
  return <button id="signInButton" onClick={()=> loginWithRedirect() }>Log In</button>
}