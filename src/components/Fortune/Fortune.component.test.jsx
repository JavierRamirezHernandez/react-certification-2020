import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Fortune from './Fortune.component';

let container = null;

describe('Fortune Component', () => {
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
      render(<Fortune />, container);
    });
    expect(container).toBeDefined();
  });
});
