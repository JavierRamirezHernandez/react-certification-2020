import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { AuthProvider } from '../../providers/Auth/Auth.provider';
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
        <AuthProvider>
          <FavProvider>
            <Detail data={data} />
          </FavProvider>
        </AuthProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
