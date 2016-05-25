'use strict';



import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from './App/App';
import Login from './Login/Login';
import configureStore from '../config/configureStore';
const store = configureStore();


const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={App}/>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);



export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}