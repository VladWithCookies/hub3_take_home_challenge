import { createLogic } from 'redux-logic';

import { MAX_SEARCH_RESULT_LENGTH } from '../../../constants';
import parseResponseData from '../../../utils/dogs/parseResponseData';
import { GET_DOGS, RESET_FILTER } from '../types';
import { setDogs } from '../actions';

const getDogsOperation = createLogic({
  type: [GET_DOGS, RESET_FILTER],
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const response = await httpClient.get(`/breeds/image/random/${MAX_SEARCH_RESULT_LENGTH}`);
    const dogs = parseResponseData(response);

    dispatch(setDogs(dogs));
    done();
  },
});

export default getDogsOperation;
