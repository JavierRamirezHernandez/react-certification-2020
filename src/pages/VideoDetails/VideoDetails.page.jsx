import React from 'react';
import './VideoDetails.styles.css';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { objectIsEmpty } from '../../utils/fns';
import { useApi } from '../../API';
import Detail from '../../components/Videos/Detail';
import RelatedVideos from '../../components/Videos/RelatedVideos/RelatedVideos';

function VideoDetailsPage() {
  const { id } = useParams();
  const { isLoading, data } = useApi('videos', id);

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            {isLoading ? <div>loading...</div> : null}
            {!objectIsEmpty(data) ? (
              <div>
                <Detail isLoading={isLoading} data={data} />
              </div>
            ) : (
              <div>Video not found</div>
            )}
          </Col>
          <Col xs={12} md={4}>
            {!objectIsEmpty(data) && !objectIsEmpty(data.items) && (
              <RelatedVideos id={data.items[0].id} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VideoDetailsPage;
