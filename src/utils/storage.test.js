import { storage } from './storage';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || new Error(undefined);
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

describe('Storage', () => {
  const localStorageOriginal = global.localStorage;

  beforeEach(() => {
    global.localStorage = LocalStorageMock;
  });
  afterEach(() => {
    global.localStorage = localStorageOriginal;
  });

  it('should set a value on local storage', () => {
    storage.set('foo', 'var');
    const result = storage.get('foo');
    expect(result).toEqual('var');
  });

  it('throw an error on undefined index', () => {
    expect(storage.get('test')).toEqual(null);
    expect(storage.get()).toEqual(null);
  });
});
