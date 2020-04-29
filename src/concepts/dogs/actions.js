import * as types from './types';

export const getDogs = () => ({
  type: types.GET_DOGS,
});

export const setDogs = dogs => ({
  type: types.SET_DOGS,
  dogs,
});

export const filterDogs = ({ breeds, subBreed }) => ({
  type: types.FILTER_DOGS,
  breeds,
  subBreed,
});

export const setFilter = breeds => ({
  type: types.SET_FILTER,
  breeds,
});

export const resetFilter = () => ({
  type: types.RESET_FILTER,
})
