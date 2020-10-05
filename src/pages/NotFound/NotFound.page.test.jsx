import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from './NotFound.page';

let container = null;

describe('NotFound Page', () => {
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
    const route = '/404';
    history.push(route);
    act(() => {
      render(
        <Router history={history}>
          <NotFound />
        </Router>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
