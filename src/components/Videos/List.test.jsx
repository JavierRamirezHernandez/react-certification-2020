import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import List from './List';
import data from '../../assets/data/search.json';

let container = null;

describe('List Component', () => {
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
      render(<List data={data} />, container);
    });
    expect(container).toBeDefined();
  });

  it('render with out data', () => {
    act(() => {
      render(<List data={[]} />, container);
    });
    expect(container).toBeDefined();
  });
});
