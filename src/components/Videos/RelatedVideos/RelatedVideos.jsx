import React from 'react';
import { objectIsEmpty } from '../../../utils/fns';
import { useApi } from '../../../API';
import ListRelatedVideos from './ListRelatedVideos';

function RelatedVideos({ id }) {
  const { isLoading, data } = useApi('search', null, id);

  return (
    <>
      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? <ListRelatedVideos data={data} /> : null}
    </>
  );
}

export default RelatedVideos;
