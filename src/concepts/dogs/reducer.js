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
    case types.SET_SEARCHED_BREEDS:
      return action.breeds;
    default:
      return state;
  }
};

const dogs = combineReducers({
  all,
  searchedBreeds,
});

export default dogs;
