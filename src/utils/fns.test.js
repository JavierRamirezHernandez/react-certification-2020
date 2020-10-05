import { random, objectIsEmpty } from './fns';

describe('Is emty an object', () => {
  it('should get TRUE with an non empty object', () => {
    const result = objectIsEmpty({ foo: 'bar' });

    expect(result).toEqual(false);
  });

  it('should get FALSE with an empty object', () => {
    const result = objectIsEmpty();

    expect(result).toEqual(true);
  });
});

describe('Random', () => {
  it('should get a random number passing limit', () => {
    const result = random(10);

    expect(result).toStrictEqual(expect.any(Number));
  });

  it('should get a random number without parameter', () => {
    const result = random();

    expect(result).toStrictEqual(expect.any(Number));
  });
});
