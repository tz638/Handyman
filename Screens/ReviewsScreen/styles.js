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

    height: 50, 
    backgroundColor: PRIMARY_DARK, 
    marginTop: 25, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  headerIconContainer: {

    width: 60, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  headerText: {

    flex: 1,
    color: 'white', 
    fontSize: 19
  },

  noReviewsContainer: {

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
    width: 90,
  },

  reviewContainer: {

    height: 60, 
    borderBottomWidth: 0.2, 
    marginBottom: 15, 
    flexDirection: 'row'
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

  reviewProfessionContainer: {

    width: 50, 
    alignSelf: 'flex-end'
  },

  reviewProffesion: {

    width: 50, 
    height: 50
  },

  dateAndRating: {

    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'flex-start'
  },

  starRatingContainer: {

    justifyContent: 'center', 
    width: 90, 
    marginRight: 10
  },

  completedModal: {
      
      alignSelf: 'center',
      flex: 1,
      position: 'absolute',
      left: windowWidth/7,
      top: windowHeight/5,
      bottom: windowHeight/5,
      right: windowWidth/7,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      minHeight: 300
   },

   pendingModal: {
      
      alignSelf: 'center',
      height: 270,
      width: 300,
      backgroundColor: '#ffffff',
      borderRadius: 5,
      marginTop: 50
   },

   modalHeading: {
      fontSize: 18, 
      flex: 1, 
      paddingHorizontal: 10,
      textAlignVertical: 'center'
   },

   modalToolbar: {

    borderBottomWidth: 0.2, 
    borderColor: 'black', 
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    height: 35
  },

  closeModalText: {

    color: 'white', 
    fontSize: 18, 
    textAlign: 'center',
    textAlignVertical: 'center'
  },

  closeModalButton: {

    backgroundColor: PRIMARY_DARK, 
    height: 30, 
    width: 150, 
    justifyContent: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },

  dimForModal: {

    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  modalContent: {

    flex: 1, 
    padding: 10
  },

  modalDateAndRating: {

    height: 30, 
    flexDirection: 'row'
  },

  modalDate: {

    fontStyle: 'italic', 
    fontSize: 12.5, 
    flex: 1
  },

  modalStarRatingContainer: {

    width: 110
  },

  reviewTextContainer: {

    flex: 1, 
    borderWidth: 0.2, 
    marginBottom: 10, 
    padding: 5
  },

  reviewText: {

    marginBottom: 10
  },


});