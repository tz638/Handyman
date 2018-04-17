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

  resultsContainer: {

    height: 60, 
    flexDirection: 'row', 
    borderBottomWidth: 0.2, 
    marginBottom: 20
  },

  profilePicture: {

    height: 60, 
    width: 60
  },

  informationContainer: {
    flex: 1
  },

  informationRow: {

    flex: 0.5, 
    flexDirection: 'row'
  },

  resultName: {

    fontSize: 18, 
    flex: 1, 
    textAlignVertical: 'center',
  },

  resultRating: {

    width: 90, 
    justifyContent: 'center', 
  },

  resultDistance: {

    fontSize: 14, 
    width: 80, 
    justifyContent: 'flex-start', 
    color: PRIMARY 
  },

  resultProfessionsContainer: {

    flex: 1, 
    marginHorizontal: 5, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },

  resultPrice: {

    alignSelf: 'flex-end', 
    textAlign: 'center', 
    fontSize: 24, 
    color: PRIMARY_DARK
  },

  foundResultsText: {

    marginBottom: 15, 
    fontSize: 20
  }

});