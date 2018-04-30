import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import DashboardRedirecter from '../DashboardRedirecter/DashboardRedirecter.js';
import AuthScreen from '../AuthScreen';

import styles from './Styles';

const HandymanAppComponent = props => {
  if (props.restoring) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  } else {
    if (props.logged) {
      return <DashboardRedirecter />;
    } else {
      return <AuthScreen />;
    }
  }
}

HandymanAppComponent.propTypes = {
  restoring: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

export default HandymanAppComponent;
