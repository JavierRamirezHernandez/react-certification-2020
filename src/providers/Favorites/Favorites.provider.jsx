import React, { useState, useEffect, useContext, useCallback } from 'react';

import { FAV_VIDEO_LIST } from '../../utils/constants';
import { storage } from '../../utils/storage';

const FavContext = React.createContext(null);

function useFav() {
  const context = useContext(FavContext);
  if (!context) {
    throw new Error(`Can't use "useFav" without an FavProvider!`);
  }
  return context;
}

function FavProvider({ children }) {
  const [favList, setFavList] = useState(null);

  useEffect(() => {
    const favListStored = JSON.parse(storage.get(FAV_VIDEO_LIST)) || [];
    setFavList(favListStored);
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
    <FavContext.Provider
      value={{
        favList,
        addFavorite,
        removeFavorite,
        isFavoriteVideo,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}

export { useFav, FavProvider };
export default FavProvider;
