import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';
import { useFav } from '../../../providers/Favorites/Favorites.provider';

const Info = ({ video }) => {
  const { addFavorite, removeFavorite, isFavoriteVideo } = useFav();

  function addToFavorites(videoId) {
    addFavorite(videoId);
  }
  function removeFromFavorites(videoId) {
    removeFavorite(videoId);
  }
  return (
    <Grid.Column>
      <Card fluid>
        <Link to={`/${video.id}`}>
          <Image src={video.snippet.thumbnails.medium.url} />
        </Link>
        <Card.Content>
          <Card.Description textAlign="right">
            {isFavoriteVideo(video.id) ? (
              <button
                className="ui inverted red button"
                type="button"
                onClick={() => removeFromFavorites(video.id)}
              >
                <i className="minus circle icon" />
                Remove from favorites
              </button>
            ) : (
              <button
                className="ui youtube button"
                type="button"
                onClick={() => addToFavorites(video.id)}
              >
                <i className="plus icon" />
                Add to favorites
              </button>
            )}
            <br />
            <br />
          </Card.Description>
          <Card.Header>{video.snippet.localized.title}</Card.Header>
          <Card.Meta textAlign="justify">{video.snippet.localized.description}</Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;
