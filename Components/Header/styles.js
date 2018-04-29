import { StyleSheet,
         Dimensions } from 'react-native';

import {
  PRIMARY_DARK,
  PRIMARY,
  PRIMARY_LIGHT,
  SECONDARY,
  CONTAINER
} from '../../masterStyle.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

  container: CONTAINER,

  header: {

    height: 75, 
    backgroundColor: PRIMARY_DARK, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 25
  },

  headerIconContainer: {

    width: 60, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  headerText: {

    flex: 1,
    color: 'white', 
    fontSize: 19
  },
});