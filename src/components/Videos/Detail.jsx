/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import CancelIcon from '@material-ui/icons/Cancel';
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

  const videoDate = new Date(video.snippet.publishedAt).toLocaleString().split(',')[0];

  return (
    <>
      <Card>
        <Card.Body>
          <div
            className="video"
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              paddingTop: 25,
              height: 0,
              marginBottom: '20px',
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
          <Card.Title>
            <Row>
              <Col className="text-right">
                {isFavoriteVideo(video.id) ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => removeFromFavorites(video.id)}
                  >
                    <CancelIcon />
                    Remove from favorites
                  </Button>
                ) : (
                  <Button variant="danger" onClick={() => addToFavorites(video.id)}>
                    <LibraryAddIcon />
                    Add to favorites
                  </Button>
                )}
              </Col>
            </Row>
            <Row>
              <Col>{video.snippet.title}</Col>
            </Row>
          </Card.Title>
          <Card.Text>{video.snippet.channelTitle}</Card.Text>
          <Card.Text className="text-muted text-justify">
            <p>Since {videoDate}</p>
            <div>{video.snippet.description}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Detail;
