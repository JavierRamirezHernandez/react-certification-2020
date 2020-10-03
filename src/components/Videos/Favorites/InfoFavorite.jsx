import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router';
import { useFav } from '../../../providers/Favorites/Favorites.provider';

const InfoFavorite = ({ video }) => {
  const { removeFavorite, isFavoriteVideo } = useFav();
  const history = useHistory();

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
              <CancelIcon />
              Remove from favorites
            </Button>
          ) : null}
        </Card.Footer>
      </Card>
    </>
  );
};

export default InfoFavorite;
