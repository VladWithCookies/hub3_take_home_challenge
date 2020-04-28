import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './store';
import DoggoSearch from './components/DoggoSearch';
import './stylesheets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DoggoSearch />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
