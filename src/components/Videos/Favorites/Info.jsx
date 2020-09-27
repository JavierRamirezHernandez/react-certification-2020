import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';
import { useAuth } from '../../../providers/Auth';

const Info = ({ video }) => {
  const { addFavorite, removeFavorite, isFavoriteVideo } = useAuth();

  function addToFavorites(videoId) {
    addFavorite(videoId);
  }
  function removeFromFavorites(videoId) {
    removeFavorite(videoId);
  }
  return (
    <Grid.Column>
      <Card>
        <Link to={`/${video.id}`}>
          <Image src={video.snippet.thumbnails.medium.url} />
        </Link>
        <Card.Content>
          <Card.Description>
            {isFavoriteVideo(video.id) ? (
              <button type="button" onClick={() => removeFromFavorites(video.id)}>
                Remover de favoritos
              </button>
            ) : (
              <button type="button" onClick={() => addToFavorites(video.id)}>
                Agregar a favoritos
              </button>
            )}
          </Card.Description>
          <Card.Header textAlign="center">{video.snippet.title}</Card.Header>
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;
