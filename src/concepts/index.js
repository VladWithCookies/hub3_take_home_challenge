import { combineReducers } from 'redux';

import dogs from './dogs';
import breeds from './breeds';

export default combineReducers({
  dogs,
  breeds,
});
