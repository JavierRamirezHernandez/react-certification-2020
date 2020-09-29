import React from 'react';
import { Grid } from 'semantic-ui-react';
import Info from './Info';

const VideosList = ({ data }) => {
  const { items } = data;
  return (
    <Grid stackable centered columns={4}>
      {items.map((video) => (
        <Info key={video.id} video={video} />
      ))}
    </Grid>
  );
};

export default VideosList;
