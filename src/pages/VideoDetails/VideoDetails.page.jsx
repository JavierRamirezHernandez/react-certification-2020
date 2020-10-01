import React from 'react';
import './VideoDetails.styles.css';
import { useParams } from 'react-router-dom';
import { objectIsEmpty } from '../../utils/fns';
import { useApi } from '../../API';
import Detail from '../../components/Videos/Detail';
import RelatedVideos from '../../components/Videos/RelatedVideos/RelatedVideos';

function VideoDetailsPage() {
  const { id } = useParams();
  const { isLoading, data } = useApi('videos', id);

  return (
    <>
      {isLoading ? <div>loading...</div> : null}
      {!objectIsEmpty(data) ? (
        <div>
          <Detail isLoading={isLoading} data={data} />
        </div>
      ) : (
        <div>Video not found</div>
      )}
      {!objectIsEmpty(data) && !objectIsEmpty(data.items) && (
        <div style={{ marginTop: '200px' }}>
          <RelatedVideos id={data.items[0].id} />
        </div>
      )}
    </>
  );
}

export default VideoDetailsPage;
