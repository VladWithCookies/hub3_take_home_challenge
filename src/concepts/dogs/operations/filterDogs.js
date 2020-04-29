import { createLogic } from 'redux-logic';
import { compact, join, ceil } from 'lodash';

import { MAX_SEARCH_RESULT_LENGTH } from '../../../constants';
import parseResponseData from '../../../utils/dogs/parseResponseData';
import { FILTER_DOGS } from '../types';
import { setDogs } from '../actions';

const filterDogsOperation = createLogic({
  type: FILTER_DOGS,
  latest: true,

  async process({ httpClient, action }, dispatch, done) {
    const { breeds, subBreed } = action;
    const dogsPerBreed = ceil(MAX_SEARCH_RESULT_LENGTH / breeds.length);
    const buildUrl = breed => join(compact(['breed', breed, subBreed, 'images', 'random', dogsPerBreed]), '/')
    const promises = breeds.map(breed => httpClient.get(buildUrl(breed)));
    const responses = await Promise.all(promises);

    const dogs = responses
      .reduce((accumulator, response) => accumulator.concat(parseResponseData(response)), [])
      .slice(0, MAX_SEARCH_RESULT_LENGTH);

    dispatch(setDogs(dogs));
    done();
  },
});

export default filterDogsOperation;
