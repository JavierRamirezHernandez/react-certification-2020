import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../../providers/Favorites/Favorites.provider';
import ListFavorites from './ListFavorites';
import favoritesData from '../../../assets/data/favorites.json';

let container = null;

describe('ListFavorites Component', () => {
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
          <ListFavorites data={favoritesData} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
