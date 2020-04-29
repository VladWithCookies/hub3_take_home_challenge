import { IMAGES_HOST } from '../constants';

const parseBreedFromUrl = (url) => {
  const breed = url.replace(IMAGES_HOST, '').split('/')[1];

  return breed.replace('-', ', ');
};

export default parseBreedFromUrl;
