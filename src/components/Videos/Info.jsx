import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Info = ({ video }) => {
  const history = useHistory();
  const handleGoToVideo = () => history.push(`/${video.id.videoId}`);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={video.snippet.thumbnails.medium.url}
        onClick={handleGoToVideo}
        style={{ cursor: 'pointer' }}
      />
      <Card.Body>
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Text className="text-muted text-justify">
          {video.snippet.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Info;
