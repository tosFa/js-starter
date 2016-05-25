'use strict';


import React from 'react';
import Base from './AppBase';
import Login from '../Login/Login';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {mapStateToProps} from './connectToStore';

class AppPresentation extends Base {

  render() {
    return (
      <div className='app'>
        {this.props.children}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

      </div>
    );
  }
};

const App = connect(mapStateToProps)(AppPresentation);

export default App;
