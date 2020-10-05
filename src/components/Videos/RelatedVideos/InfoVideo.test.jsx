import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../../providers/Favorites/Favorites.provider';
import InfoVideo from './InfoVideo';
import data from '../../../assets/data/related.json';

let container = null;

describe('InfoVideo Component', () => {
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
    const { items } = data;
    const video = items[0];
    act(() => {
      render(
        <FavProvider>
          <InfoVideo video={video} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
