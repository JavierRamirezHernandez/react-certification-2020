import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FavProvider } from '../../providers/Favorites/Favorites.provider';
import Favorites from './Favorites.page';

// const { FavContext } = FavProvider;
// const FavContextProvider = ({ children }) => (
//   <FavContext.Provider>{children}</FavContext.Provider>
// );

// const wrapper = ({ children }) => <FavContextProvider>{children}</FavContextProvider>;

// let resultFavorites = [];

// const mockSetFav = jest.fn().mockImplementation((favorite) => {
//   resultFavorites = [...favorite];

//   return resultFavorites;
// });

// const mockUseContext = jest.fn().mockImplementation(() => ({
//   favList: [],
//   setFavList: mockSetFav,
// }));

// React.useContext = mockUseContext;

// class LocalStorageMock {
//   constructor() {
//     this.store = {};
//   }

//   clear() {
//     this.store = {};
//   }

//   getItem(key) {
//     return this.store[key] || new Error(undefined);
//   }

//   setItem(key, value) {
//     this.store[key] = value.toString();
//   }

//   removeItem(key) {
//     delete this.store[key];
//   }
// }

let container = null;

describe('Favorites Page', () => {
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
      render(
        <FavProvider>
          <Favorites />
        </FavProvider>,
        container
      );
    });
    expect(container).toBeDefined();
  });
});
