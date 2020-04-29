import { v4 as uuidv4 } from 'uuid';

import parseBreedFromUrl from './parseBreedFromUrl';

const parseResponseData = response => (
  response.data.message.map(url => ({
    image: url,
    id: uuidv4(),
    breed: parseBreedFromUrl(url),
  }))
);

export default parseResponseData;
