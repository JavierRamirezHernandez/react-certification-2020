import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Info from './Info';
import data from '../../assets/data/search.json';

let container = null;

describe('Info Component', () => {
  const video = data.items[0];
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
      render(<Info video={video} />, container);
    });
    expect(container).toBeDefined();
  });
});
