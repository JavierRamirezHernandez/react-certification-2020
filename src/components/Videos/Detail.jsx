/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
// import { FormattedMessage } from 'react-intl';
// import { withLoadingState } from '../../HoC';
import { useFav } from '../../providers/Favorites/Favorites.provider';

const Detail = ({ data }) => {
  const video = data.items[0];
  const { addFavorite, removeFavorite, isFavoriteVideo } = useFav();

  function addToFavorites(videoId) {
    addFavorite(videoId);
  }
  function removeFromFavorites(videoId) {
    removeFavorite(videoId);
  }
  return (
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <div
            className="video"
            style={{
              position: 'relative',
              paddingBottom: '56.25%' /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <Card fluid>
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
              <Card.Header textAlign="center">{video.snippet.title}</Card.Header>
              <Card.Meta>
                <strong>{video.snippet.description}</strong>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Detail;
