import React from 'react';
import { useApi } from '../../API';
import List from '../../components/Videos/Favorites/List';
import { useAuth } from '../../providers/Auth';
import './Favorites.styles.css';
import { objectIsEmpty } from '../../utils/fns';

function FavoritesPage() {
  const { favList, authenticated, user } = useAuth();
  const { isLoading, data } = useApi('videos', favList);
  return (
    <section>
      <h1>Favorite Videos!</h1>

      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) && !objectIsEmpty(data.items) ? (
        <>
          <List isLoading={isLoading} data={data} />
        </>
      ) : (
        <div>You haven't added any video to your favorites yet</div>
      )}
    </section>
  );
}

export default FavoritesPage;
