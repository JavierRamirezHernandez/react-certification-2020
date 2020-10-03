import React from 'react';
import { useApi } from '../../API';
import ListFavorites from '../../components/Videos/Favorites/ListFavorites';
import { useFav } from '../../providers/Favorites/Favorites.provider';
import './Favorites.styles.css';
import { objectIsEmpty } from '../../utils/fns';

function FavoritesPage() {
  const { favList } = useFav();
  const { isLoading, data } = useApi('videos', favList);
  return (
    <>
      <h1 className="display-4">Favorite Videos!</h1>
      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) && !objectIsEmpty(data.items) ? (
        <ListFavorites isLoading={isLoading} data={data} />
      ) : (
        <div>You haven't added any video to your favorites yet</div>
      )}
    </>
  );
}

export default FavoritesPage;
