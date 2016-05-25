/**
 * # reducers
 * 
 * This class combines all the reducers into one
 * 
 */
'use string';

import login from './login';
import { combineReducers } from 'redux';

/**
 * ## CombineReducers
 * 
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */ 
const rootReducer = combineReducers({
  /**
   * app reducers go here
   */
  login
});

export default rootReducer;
