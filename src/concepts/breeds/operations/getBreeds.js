import { createLogic } from 'redux-logic';

import { GET_BREEDS } from '../types';
import { setBreeds } from '../actions';

const getBreedsOperation = createLogic({
  type: GET_BREEDS,
  latest: true,

  async process({ httpClient }, dispatch, done) {
    const { data: { message } } = await httpClient.get('/breeds/list/all');

    dispatch(setBreeds(message));
    done();
  },
});

export default getBreedsOperation;
