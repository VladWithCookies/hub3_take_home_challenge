import { createLogic } from 'redux-logic';

import { GET_DOGS } from '../types';

const getDogsOperation = createLogic({
  type: GET_DOGS,
  latest: true,

  async process(_, dispatch, done) {
    done();
  },
});

export default getDogsOperation;
