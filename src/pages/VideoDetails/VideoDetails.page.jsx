import React from 'react';
import './VideoDetails.styles.css';
import { useParams } from 'react-router-dom';
import { objectIsEmpty } from '../../utils/fns';
import { useApi } from '../../API';
import Detail from '../../components/Videos/Detail';

function VideoDetailsPage() {
  const { id } = useParams();
  const { isLoading, data } = useApi('videos', id);

  console.log(data);
  return (
    <>
      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? (
        <Detail isLoading={isLoading} data={data} />
      ) : (
        <div>Video not found</div>
      )}
    </>
  );
}

export default VideoDetailsPage;
