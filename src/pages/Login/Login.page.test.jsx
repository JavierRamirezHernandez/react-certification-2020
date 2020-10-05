import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { AuthProvider } from '../../providers/Auth/Auth.provider';
import Login from './Login.page';

let container = null;

describe('Login Page', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  });

  it('render successfully', () => {
    act(() => {
      render(
        <AuthProvider>
          <Login />
        </AuthProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
