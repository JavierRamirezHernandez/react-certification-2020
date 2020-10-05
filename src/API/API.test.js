import API from './API';
import data from '../assets/data/search.json';
import dataVideo from '../assets/data/video.json';
import relatedVideo from '../assets/data/related.json';
import favVideos from '../assets/data/favorites.json';

describe('API', () => {
  let spyGet;
  let spyGetEntity;

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('call get function', () => {
    spyGet = jest.spyOn(API, 'get').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(data),
      });
    });
    API.get();
    expect(spyGet).toBeCalled();
  });

  it('call getEntity function', () => {
    spyGetEntity = jest.spyOn(API, 'getEntity').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(dataVideo),
      });
    });
    API.getEntity();
    expect(spyGetEntity).toBeCalled();
  });

  it('call get function successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    );

    const result = await API.getEntity();
    expect(result).toBeInstanceOf(Object);
  });

  it('call get function with error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('error')));

    const result = await API.getEntity();
    expect(result).toEqual([]);
  });
});
