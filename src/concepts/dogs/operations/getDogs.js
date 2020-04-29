import { createLogic } from 'redux-logic';

import { MAX_SEARCH_RESULT_LENGTH } from '../../../constants';
import parseResponseData from '../../../utils/parseResponseData';
import { GET_DOGS } from '../types';
import { setDogs } from '../actions';

const getDogsOperation = createLogic({
  type: GET_DOGS,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const response = await httpClient.get(`/breeds/image/random/${MAX_SEARCH_RESULT_LENGTH}`);
    const dogs = parseResponseData(response);

    dispatch(setDogs(dogs));
    done();
  },
});

export default getDogsOperation;
