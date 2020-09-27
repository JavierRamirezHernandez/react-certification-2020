import React from 'react';
import { objectIsEmpty } from '../../../utils/fns';
import { useApi } from '../../../API';
import List from '../List';

function RelatedVideos({ id }) {
  const { isLoading, data } = useApi('search', null, id);

  return (
    <>
      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? <List data={data} /> : <div>Video not found</div>}
    </>
  );
}

export default RelatedVideos;
