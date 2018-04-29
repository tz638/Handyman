import React from 'react';
import { 
	Text, 
	TouchableOpacity, 
	View,  
} from 'react-native';

import { Icon as ElementsIcon } from 'react-native-elements';

import styles from './styles.js';

export default class Header extends React.Component {
  
  render() {
    return (
      <View style={[styles.header]}>
	      <View style={[styles.headerIconContainer]}>
	        <TouchableOpacity onPress = {this.props.onLeftIconPress}>
	          <ElementsIcon name={this.props.leftIcon}
	                        color='white'
	                        type='material-community'>
	          </ElementsIcon>
	        </TouchableOpacity>
	      </View>

	      { this.props.title ? 

	      	<Text style={[styles.headerText]}>
		      {this.props.title}
		    </Text> 
		    : 
		    this.props.center
	      }	      
	      <View style={[styles.headerIconContainer]}>
	        <ElementsIcon name={this.props.rightIcon}
	                      color='white'
	                      type='material-community'>
	        </ElementsIcon>
	      </View>
	</View>
    );
  }
}