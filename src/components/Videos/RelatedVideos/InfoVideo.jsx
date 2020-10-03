/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { ListGroupItem, Media } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Info = ({ video }) => {
  const history = useHistory();
  const handleGoToVideo = () => history.push(`/${video.id.videoId}`);

  return (
    <ListGroupItem>
      <Media onClick={handleGoToVideo} style={{ cursor: 'pointer' }}>
        <img width={120} src={video.snippet.thumbnails.default.url} alt="" />
        <Media.Body>
          <h5>{video.snippet.title}</h5>
          <p className="text-muted text-justify">{video.snippet.channelTitle}</p>
        </Media.Body>
      </Media>
    </ListGroupItem>
  );
};

export default Info;
