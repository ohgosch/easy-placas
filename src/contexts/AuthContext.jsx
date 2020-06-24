import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { authenticateRequest } from 'logic/requests/auth';

export const storageKey = 'AUTH';

export const getAuthByStorage = () =>
  JSON.parse(localStorage.getItem(storageKey));

const setAuthInStorage = (value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const AuthContext = createContext({});

const initialState = {
  token: undefined,
  authenticated: false,
  ...getAuthByStorage(),
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { token, authenticated } = auth;

  async function login({ email, password }) {
    setLoading(true);
    try {
      setError(false);

      const { data } = await authenticateRequest(email, password);

      const values = {
        token: data.token,
        authenticated: true,
      };

      setAuthInStorage(values);
      setAuth(values);
    } catch (errors) {
      setError(true);
    }
    setLoading(false);
  }

  async function logout() {
    setAuthInStorage({});
    setAuth({});
  }

  const publicValue = {
    token,
    error,
    authenticated,
    loading,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={publicValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
