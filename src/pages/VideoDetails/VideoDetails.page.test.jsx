import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FavProvider } from '../../providers/Favorites/Favorites.provider';
import VideoDetails from './VideoDetails.page';

let container = null;

describe('VideoDetails Page', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('render successfully', () => {
    const history = createMemoryHistory();
    const route = '/1';
    history.push(route);

    act(() => {
      render(
        <Router history={history}>
          <FavProvider>
            <VideoDetails />
          </FavProvider>
        </Router>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
