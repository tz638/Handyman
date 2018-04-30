import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, Text } from 'react-native'
import { Icon as ElementsIcon } from 'react-native-elements'

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './Styles';

const LogoutButtonComponent = props =>
  <TouchableOpacity style={styles.container}
  					onPress={props.logout}>
	<ElementsIcon name='exit-to-app'
	              type='material-community'
	              color={PRIMARY_LIGHT}/>
	<Text style={styles.logoutText}>Logout</Text>
  </TouchableOpacity>

LogoutButtonComponent.propTypes = {
  logout: PropTypes.func.isRequired
};

export default LogoutButtonComponent;
