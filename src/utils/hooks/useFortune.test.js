import React, { useState as useStateMock } from 'react';
// import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
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
      .mockImplementation(() =>
        Promise.resolve({ json: Promise.resolve([{ message: 'test fortune' }]) })
      );
    useStateMock.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });
  xit('should get TRUE with an non empty object', () => {
    act(async () => {
      useFortune();
    });
    expect(spyFetch).toBeCalledTimes(0);
  });

  it('call get fortune successfully', async () => {
    const { result } = await renderHook(() => useFortune());
    const resultData = result.current.fortune;
    expect(resultData).toEqual(null);
  });
});
