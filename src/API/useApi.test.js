import API from './API';
import useApi from './useApi';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';

import dataSearch from '../assets/data/search.json';
// import dataVideo from '../assets/data/video.json';
// import relatedVideo from '../assets/data/related.json';
// import favVideos from '../assets/data/favorites.json';

const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

describe('useApi hook', () => {
  let spyGet;
  beforeEach(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('call get function successfully', async () => {
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(dataSearch),
      });
    });
    const { result } = renderHook(() => useApi('search'));

    await act(async () => {
      result.current.entity = 'search';
    });
    const resultData = result.current.data.json();
    expect(resultData).toBeInstanceOf(Object);
  });

  it('call get function with error', async () => {
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });
    const { result } = renderHook(() => useApi('search'));

    await act(async () => {
      result.current.entity = 'search';
    });
    const resultData = result.current.data;
    expect(resultData).toEqual(null);
  });
});
