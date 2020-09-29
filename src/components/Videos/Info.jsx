import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Image } from 'semantic-ui-react';

const Info = ({ video }) => {
  // console.log(video);
  return (
    <Grid.Column centered>
      <Card fluid>
        <Link to={`/${video.id.videoId}`}>
          <Image src={video.snippet.thumbnails.medium.url} wrapped ui={false} />
        </Link>
        <Card.Content>
          <Card.Header textAlign="center">{video.snippet.title}</Card.Header>
          <Card.Meta>{video.snippet.description}</Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default Info;
