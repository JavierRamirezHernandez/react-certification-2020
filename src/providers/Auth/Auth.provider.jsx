import React, { useState, useEffect, useContext, useCallback } from 'react';

import {
  AUTH_STORAGE_KEY,
  AUTH_STORAGE_USER,
  FAV_VIDEO_LIST,
} from '../../utils/constants';
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
  const [favList, setFavList] = useState(null);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    const userStored = JSON.parse(storage.get(AUTH_STORAGE_USER)) || null;
    const favListStored = JSON.parse(storage.get(FAV_VIDEO_LIST)) || [];

    setAuthenticated(isAuthenticated);
    setUser(userStored);
    setFavList(favListStored);
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

  const addFavorite = useCallback(
    (videoId) => {
      const newFavList = [...favList, videoId];
      setFavList(newFavList);
      storage.set(FAV_VIDEO_LIST, JSON.stringify(newFavList));
    },
    [favList]
  );

  const removeFavorite = useCallback(
    (videoId) => {
      const newFavList = favList.filter((id) => id !== videoId);
      setFavList(newFavList);
      storage.set(FAV_VIDEO_LIST, JSON.stringify(newFavList));
    },
    [favList]
  );

  const isAdded = (videoId) => favList.indexOf(videoId) > -1;

  const isFavoriteVideo = useCallback((videoId) => isAdded(videoId), [favList]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authenticated,
        user,
        addFavorite,
        removeFavorite,
        isFavoriteVideo,
        favList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
