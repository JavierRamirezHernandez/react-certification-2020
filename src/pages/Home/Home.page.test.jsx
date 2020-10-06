import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from './Home.page';

let container = null;

describe('Home Page', () => {
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
    act(() => {
      render(<Home />, container);
    });
    expect(container).toBeDefined();
  });

  it('change input search value', () => {
    act(() => {
      render(<Home />, container);
    });
    const inputSearch = screen.getByTestId('querySearch');
    expect(inputSearch.value).toEqual('');

    fireEvent.change(inputSearch, { target: { value: 'wizeline' } });
    expect(inputSearch.value).toEqual('wizeline');
  });
});
