import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import API from '../../API/API';
import { FavProvider } from '../../providers/Favorites/Favorites.provider';
import VideoDetails from './VideoDetails.page';
import dataVideo from '../../assets/data/video.json';

let container = null;

describe('VideoDetails Page', () => {
  let spyGet;

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
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(dataVideo),
      });
    });

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

  it('render emty because of an error', () => {
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.reject(new Error(''));
    });

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

  it('render not found video', () => {
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(null),
      });
    });

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
