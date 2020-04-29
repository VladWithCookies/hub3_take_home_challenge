import { combineReducers } from 'redux';

import * as types from './types';

const all = (state = [], action) => {
  switch (action.type) {
    case types.SET_DOGS:
      return action.dogs;
    default:
      return state;
  }
};

const searchedBreeds = (state = [], action) => {
  switch (action.type) {
    case types.FILTER_DOGS:
      return action.breeds;
    case types.SET_FILTER:
      return action.breeds;
    case types.RESET_FILTER:
      return [];
    default:
      return state;
  }
};

const dogs = combineReducers({
  all,
  searchedBreeds,
});

export default dogs;
