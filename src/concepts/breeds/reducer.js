import * as types from './types';

const breeds = (state = [], action) => {
  switch (action.type) {
    case types.SET_BREEDS:
      return action.breeds;
    default:
      return state;
  }
};

export default breeds;
