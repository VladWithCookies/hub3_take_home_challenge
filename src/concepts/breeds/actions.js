import * as types from './types';

export const getBreeds = () => ({
  type: types.GET_BREEDS,
});

export const setBreeds = breeds => ({
  type: types.SET_BREEDS,
  breeds,
});
