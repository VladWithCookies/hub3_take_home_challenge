
import { dogsOperations } from './dogs';
import { breedsOperations } from './breeds';

export default [
  ...dogsOperations,
  ...breedsOperations,
];
