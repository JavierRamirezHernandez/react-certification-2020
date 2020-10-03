import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Info = ({ video }) => {
  const history = useHistory();
  const handleGoToVideo = () => history.push(`/${video.id.videoId}`);
  const videoDate = new Date(video.snippet.publishedAt).toLocaleString().split(',')[0];

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
          <div>{video.snippet.channelTitle}</div>
          <div>Since {videoDate}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Info;
