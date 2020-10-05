import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../../providers/Favorites/Favorites.provider';
import InfoFavorite from './InfoFavorite';
import favoritesData from '../../../assets/data/favorites.json';

let container = null;

describe('InfoFavorite Component', () => {
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
    const { items } = favoritesData;
    const data = items[0];
    act(() => {
      render(
        <FavProvider>
          <InfoFavorite video={data} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
