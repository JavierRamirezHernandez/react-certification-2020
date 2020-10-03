import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useFav } from '../../../providers/Favorites/Favorites.provider';

const InfoFavorite = ({ video }) => {
  const { addFavorite, removeFavorite, isFavoriteVideo } = useFav();
  const history = useHistory();

  function addToFavorites(videoId) {
    addFavorite(videoId);
  }
  function removeFromFavorites(videoId) {
    removeFavorite(videoId);
  }

  const handleGoToVideo = () => history.push(`/${video.id}`);

  const videoDate = new Date(video.snippet.publishedAt).toLocaleString().split(',')[0];

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={video.snippet.thumbnails.medium.url}
          onClick={handleGoToVideo}
          style={{ cursor: 'pointer' }}
        />
        <Card.Body>
          <Card.Title>{video.snippet.localized.title}</Card.Title>
          <Card.Text className="text-muted text-justify">
            <div>{video.snippet.channelTitle}</div>
            <div>Since {videoDate}</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-right">
          {isFavoriteVideo(video.id) ? (
            <Button
              variant="outline-danger"
              onClick={() => removeFromFavorites(video.id)}
            >
              <i className="minus circle icon" />
              Remove from favorites
            </Button>
          ) : (
            <Button variant="danger" onClick={() => addToFavorites(video.id)}>
              <i className="plus icon" />
              Add to favorites
            </Button>
          )}
        </Card.Footer>
      </Card>
      {/* <Grid.Column>
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
            <Card.Meta textAlign="justify">
              {video.snippet.localized.description}
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column> */}
    </>
  );
};

export default InfoFavorite;
