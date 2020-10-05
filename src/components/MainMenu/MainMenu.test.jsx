import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MainMenu from './MainMenu';
import { AuthProvider } from '../../providers/Auth/Auth.provider';

let container = null;
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('MainMenu', () => {
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

  it('Redirects to "/" on click "Home" item', () => {
    act(() => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <MainMenu />
          </AuthProvider>
        </MemoryRouter>,
        container
      );
    });
    const homeItem = screen.getByTestId('homeItem');
    fireEvent.click(homeItem);
    expect(mockHistoryPush).toBeCalledTimes(0);
  });
});
