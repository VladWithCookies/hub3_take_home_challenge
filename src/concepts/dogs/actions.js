import * as types from './types';

export const getDogs = () => ({
  type: types.GET_DOGS,
});

export const setDogs = dogs => ({
  type: types.SET_DOGS,
  dogs,
});

export const getDogsByBreeds = () => ({
  type: types.GET_DOGS_BY_BREEDS,
});

export const setSearchedBreeds = breeds => ({
  type: types.SET_SEARCHED_BREEDS,
  breeds,
});
