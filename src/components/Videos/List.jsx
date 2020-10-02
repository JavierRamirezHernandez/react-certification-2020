import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Info from './Info';

const VideosList = ({ data }) => {
  const { items } = data;
  return (
    <Row>
      {items.map((video) => (
        <Col xs={12} sm={4} md={3} style={{ marginBottom: '10px' }}>
          <Info key={video.id.videoId} video={video} />
        </Col>
      ))}
    </Row>
  );
};

export default VideosList;
