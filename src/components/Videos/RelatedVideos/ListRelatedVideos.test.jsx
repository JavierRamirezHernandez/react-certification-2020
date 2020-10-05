import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../../providers/Favorites/Favorites.provider';
import ListRelatedVideos from './ListRelatedVideos';
import data from '../../../assets/data/related.json';

let container = null;

describe('ListRelatedVideos Component', () => {
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
          <ListRelatedVideos data={data} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
