import ReactDOM from 'react-dom';
import index from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Root index', () => {
  it('render index Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(index, div);
    global.document.getElementById = (id) => id === 'root' && div;
    expect(ReactDOM.render).toHaveBeenCalledWith(index, div);
  });
});
