import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import App from './components/App/App';
import Login from './components/Login/Login';
import configureStore from './config/configureStore';
import Routes from './components/Routes';

const store = configureStore({});

render((
  <Routes/>
), document.getElementById('app'))