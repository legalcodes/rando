import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from './redux/reducers';

const logger = createLogger();

const middleware = __DEV__ && applyMiddleware(promise, logger);

const store = createStore(
  reducer,
  middleware
);

export default store;
