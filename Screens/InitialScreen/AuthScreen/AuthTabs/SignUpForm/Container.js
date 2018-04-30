import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { signupUser } from '../../../../../Firebase/store/session';

import SignUpFormComponent from './Component';

class SignUpFormContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'Sign Up',
    tabBarIcon: ({ tintColor }) => null
  };

  render() {
    return (
      <SignUpFormComponent
        signup={this.props.signup} />
    );
  }
}

SignUpFormContainer.propTypes = {
  signup: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(null, mapDispatchToProps)(SignUpFormContainer);
