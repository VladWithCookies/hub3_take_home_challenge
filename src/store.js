import { createLogicMiddleware } from 'redux-logic';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import httpClient from './lib/httpClient';
import rootReducer from './concepts';
import operations from './concepts/operations';

const logicMiddleware = createLogicMiddleware(operations, { httpClient });
const middlewares = applyMiddleware(logicMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middlewares));

export default store;
