import React, { useState as useStateMock } from 'react';
import { act } from 'react-dom/test-utils';
import { useFortune } from './useFortune';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Get fortune message', () => {
  const setState = jest.fn();
  let spyFetch;

  beforeEach(() => {
    spyFetch = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve({ json: Promise.resolve([]) }));
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });
  it('should get TRUE with an non empty object', () => {
    act(async () => {
      useFortune();
    });
    expect(spyFetch).toBeCalledTimes(0);
  });
});
