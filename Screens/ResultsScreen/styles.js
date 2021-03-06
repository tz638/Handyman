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
  },

  buttonsContainer: {

    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },

  buttonContainer: {

    borderRadius: 10, 
    width: 120, 
    borderWidth: 1.5, 
    marginLeft: 10, 
    height: 35,
    borderColor: PRIMARY,
    flexDirection:'row'
  },

  professionSize: {

    height: 25, 
    width: 25
  },

  sortButtonText: {

    color: 'white', 
    textAlign: 'center', 
    textAlignVertical: 'center'
  },

  sortButtonContainer: {

    width: 45, 
    backgroundColor: PRIMARY_DARK, 
    borderRadius: 10, 
    marginLeft: 10, 
    height: 35, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  sortingArrowStyle: {

    flex: 0.3, 
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  sortingParameterContainer: {

    flex: 0.7, 
    alignItems: 'flex-start', 
    justifyContent: 'center'
  },

  sortingParameterText: {

    padding: 5, 
    color: PRIMARY_DARK
  },

  activityIndicator: {

    flex: 1, 
    justifyContent:'center'
  },

});