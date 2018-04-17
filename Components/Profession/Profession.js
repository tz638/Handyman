import React, { Component } from 'react';
import {
  	TouchableOpacity,
  	Image,
    Alert
} from 'react-native';

import Users from '../..//Users.js';

import styles from './styles.js';

export default class Profession extends Component {

  constructor(props)	{

  	super(props);
  	this.state={
  	}
  }

  capitalizeFirstLetter = (string) => {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  alertProfession = () => {

    Alert.alert("Profession", this.capitalizeFirstLetter(this.props.name))
  }
  
  render = () => {

    return (
      <TouchableOpacity style={{marginBottom: 5}}
                        onLongPress={this.props.onLongPress || this.alertProfession}
                        onPress={this.props.onPress}
                        disabled={this.props.disabled}>
	    	<Image style={[styles.professionIcon, this.props.style]}
	    		   source={Users[this.props.name]}/>
    	</TouchableOpacity>
    );
  }
}