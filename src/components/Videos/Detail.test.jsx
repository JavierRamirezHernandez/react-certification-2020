import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../providers/Favorites/Favorites.provider';
import Detail from './Detail';
import data from '../../assets/data/video.json';

let container = null;

describe('Detail Component', () => {
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
          <Detail data={data} />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
