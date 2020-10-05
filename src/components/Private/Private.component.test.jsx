import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthProvider } from '../../providers/Auth/Auth.provider';
import Private from './Private.component';

let container = null;

describe('Private Page', () => {
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
    const route = '/';
    history.push(route);

    act(() => {
      render(
        <AuthProvider>
          <Router history={history}>
            <Private />
          </Router>
        </AuthProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
  //   it('render successfully', () => {
  //     const history = createMemoryHistory();
  //     const route = '/404';
  //     history.push(route);
  //     act(() => {
  //       render(
  //         <Router history={history}>
  //           <Private />
  //         </Router>,
  //         container
  //       );
  //     });
  //     expect(container).toBeDefined();
  //   });
});
