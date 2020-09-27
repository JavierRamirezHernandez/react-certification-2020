import React from 'react';
import { Grid } from 'semantic-ui-react';
import Info from './Info';

const CharactersList = ({ data }) => {
  console.log('data ------- ', data);
  return (
    <Grid stackable columns={4}>
      {data.items.map((video) => (
        <Info key={video.id.videoId} video={video} />
      ))}
    </Grid>
  );
};

export default CharactersList;
