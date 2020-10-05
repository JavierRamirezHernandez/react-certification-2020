import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
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
      ReactDOM.render(
        <AuthProvider>
          <Login />
        </AuthProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });

  it('change form input values', () => {
    act(() => {
      render(
        <AuthProvider>
          <Login />
        </AuthProvider>,
        container
      );
    });
    const inputUsername = screen.getByTestId('username');
    const inputPassword = screen.getByTestId('password');

    expect(inputUsername.value).toEqual('');
    expect(inputPassword.value).toEqual('');

    fireEvent.change(inputUsername, { target: { value: 'wizeline' } });
    fireEvent.change(inputPassword, { target: { value: 'Rocks!' } });

    expect(inputUsername.value).toEqual('wizeline');
    expect(inputPassword.value).toEqual('Rocks!');
  });
});
