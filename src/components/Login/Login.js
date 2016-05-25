'use strict';


import React from 'react';
import Base from './LoginBase';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { mapStateToProps } from './connectToStore';

class LoginPresentation extends Base {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='login'>
        {'this is login!!!'}
      </div>
    );
  }
};

const Login = connect(mapStateToProps)(LoginPresentation);

export default Login;
