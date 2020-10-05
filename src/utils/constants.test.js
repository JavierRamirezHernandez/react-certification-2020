import { AUTH_STORAGE_KEY, AUTH_STORAGE_USER, FAV_VIDEO_LIST } from './constants';

describe('Constants', () => {
  it('should be defined', () => {
    expect(AUTH_STORAGE_KEY).toBeDefined();
    expect(AUTH_STORAGE_USER).toBeDefined();
    expect(FAV_VIDEO_LIST).toBeDefined();
  });
});
