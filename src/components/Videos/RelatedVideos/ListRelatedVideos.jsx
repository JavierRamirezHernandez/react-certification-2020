import React from 'react';
import { Col, Card, ListGroup } from 'react-bootstrap';
import InfoVideo from './InfoVideo';

const VideosList = ({ data }) => {
  const { items } = data;
  return (
    <Card>
      <ListGroup>
        {items.map((video) => (
          <InfoVideo key={video.id.videoId} video={video} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default VideosList;
