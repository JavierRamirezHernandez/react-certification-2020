import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, AUTH_STORAGE_USER } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const userStored = JSON.parse(storage.get(AUTH_STORAGE_USER)) || null;

    setAuthenticated(isAuthenticated);
    setUser(userStored);
  }, []);

  const login = useCallback((userData) => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
    setUser(userData);
    storage.set(AUTH_STORAGE_USER, JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    setUser(null);
    storage.set(AUTH_STORAGE_USER, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
