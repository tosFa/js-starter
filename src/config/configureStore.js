/**
 * # configureStore.js
 *
 * A Redux boilerplate setup
 *
 */
'use strict';

/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';


/**
 * ## Reducer
 * The reducer contains the 4 reducers from
 * device, global, auth, profile
 */
import reducer from '../reducers';
/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 *
 */
export default function configureStore(initialState) {

  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
