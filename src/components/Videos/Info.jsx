import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

const Info = ({ video }) => {
  // console.log(video);
  return (
    <Grid.Column>
      <Card>
        <Link to={`/${video.id.videoId}`}>
          <Image src={video.snippet.thumbnails.medium.url} />
        </Link>
        <Card.Content>
          <Card.Header textAlign="center">{video.snippet.title}</Card.Header>
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;
