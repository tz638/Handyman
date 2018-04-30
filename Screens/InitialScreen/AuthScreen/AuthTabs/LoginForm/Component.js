import React from 'react';
import PropTypes from 'prop-types';

import BasicForm from '../../../../../Components/BasicForm';

const LoginFormComponent = props =>
  <BasicForm
    buttonTitle="Login"
    onButtonPress={props.login} 
    register={false}/>

LoginFormComponent.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginFormComponent;
