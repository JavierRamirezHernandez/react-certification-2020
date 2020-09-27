/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
// import { FormattedMessage } from 'react-intl';
// import { withLoadingState } from '../../HoC';

const Detail = ({ data }) => {
  const video = data.items[0];
  return (
    <Container textAlign="center">
      <Card centered>
        {/* <Image src={video.snippet.thumbnails.high.url} /> */}
        <Card.Content>
          <Card.Description>
            <div
              className="video"
              style={{
                position: 'relative',
                paddingBottom: '56.25%' /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
              />
            </div>
          </Card.Description>
          <Card.Description>
            <button type="button">Agregar a favoritos</button>
          </Card.Description>
          <Card.Header textAlign="center">{video.snippet.title}</Card.Header>
          <Card.Description>
            <strong>{video.snippet.description}</strong>
          </Card.Description>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Detail;
