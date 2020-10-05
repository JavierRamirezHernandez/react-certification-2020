import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../../providers/Favorites/Favorites.provider';
import RelatedVideos from './RelatedVideos';
// import data from '../../../assets/data/related.json';

let container = null;

describe('RelatedVideos Component', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('render with data', () => {
    act(() => {
      render(
        <FavProvider>
          <RelatedVideos id={1} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
