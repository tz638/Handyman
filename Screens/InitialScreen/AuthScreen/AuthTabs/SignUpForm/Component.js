import React from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../../../../../Components/BasicForm';

const SignUpFormComponent = props =>
  <BasicForm
    buttonTitle="Sign Up"
    onButtonPress={props.signup}
    register={true} />

SignUpFormComponent.propTypes = {
  signup: PropTypes.func.isRequired
};

export default SignUpFormComponent;
