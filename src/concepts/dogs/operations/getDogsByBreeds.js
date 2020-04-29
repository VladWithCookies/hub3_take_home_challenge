import { createLogic } from 'redux-logic';

import { MAX_SEARCH_RESULT_LENGTH } from '../../../constants';
import parseResponseData from '../../../utils/parseResponseData';
import { GET_DOGS_BY_BREEDS } from '../types';
import { setDogs } from '../actions';

const getDogsByBreedsOperation = createLogic({
  type: GET_DOGS_BY_BREEDS,
  latest: true,

  async process({ httpClient, getState }, dispatch, done) {
    const { dogs: { searchedBreeds } } = getState();
    const dogsPerBreed = MAX_SEARCH_RESULT_LENGTH / searchedBreeds.length;
    const promises = searchedBreeds.map(breed => httpClient.get(`/breed/${breed}/images/random/${dogsPerBreed}`));
    const responses = await Promise.all(promises);
    const dogs = responses.reduce((accumulator, response) => accumulator.concat(parseResponseData(response)), []);

    dispatch(setDogs(dogs));
    done();
  },
});

export default getDogsByBreedsOperation;
