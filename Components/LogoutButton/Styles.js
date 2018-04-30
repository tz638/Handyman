import { StyleSheet } from 'react-native';

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';

export default StyleSheet.create({
  container: {

  	flex: 1, 
  	flexDirection: 'row', 
  	marginLeft: 16, 
  	marginTop: 40
  },

  logoutText: {

  	color: PRIMARY_LIGHT, 
  	marginLeft: 32, 
  	fontWeight: 'bold'
  }
});
