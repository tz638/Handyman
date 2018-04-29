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

  noServicesContainer: {

    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },

  resultName: {

    fontSize: 18, 
    flex: 1, 
    textAlignVertical: 'top',
  },

  resultDate: {

    flex: 1,
    fontSize: 14, 
    justifyContent: 'flex-start', 
    color: PRIMARY,
    textAlignVertical: 'center',
  },

  serviceContainer: {

    height: 60, 
    borderBottomWidth: 0.2, 
    marginBottom: 15, 
    flexDirection: 'row',
    flex: 1
  },

  pictureContainer: {

    width: 60
  },

  profilePicture: {

    height: 60, 
    width: 60
  },

  textsContainer: {

    flex: 1
  },

 dateContainer: {

    flexDirection: 'row',
    flex: 1, 
    justifyContent: 'flex-start'
 },

});