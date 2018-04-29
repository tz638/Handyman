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
    alignItems: 'center',
  },

  headerText: {

    flex: 1,
    color: 'white', 
    fontSize: 19
  },

  profilePictureContainer: {
    height: 120,
    width: 120,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  profilePicture: {

    height: 120, 
    width: 120, 
    borderColor: PRIMARY_DARK, 
    borderWidth: 5
  },

  professionsContainer: {

    flex: 1, 
    marginLeft: 10
  },

  professionIconsContainer: {

    height: 60,
    borderWidth: 1,
    borderColor: PRIMARY_DARK,
    paddingTop: 5,
    paddingLeft: 5,
  },

  confirmationButton: {

    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: PRIMARY_DARK,
    width: windowWidth/2,
    height: 40,
    marginTop: 5
  },

  confirmationText: {
    color: SECONDARY,
    fontSize: 18
  },

  inputsContainer: {
    flexDirection: 'row',
    marginVertical: 5,

  },

  personalInformation: {

    flex: 0.5,
    marginRight: 10
  },

  addressInformation: {

    flex: 0.5
  },

  textField: {

    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: PRIMARY_DARK,
    fontSize: 16,
    paddingHorizontal: 5,
    marginBottom: 5
  },

  addProfessionContainer: {

    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  modal: {
      
      alignSelf: 'center',
      flex: 1,
      position: 'absolute',
      left: windowWidth/7,
      top: windowHeight/5,
      bottom: windowHeight/5,
      right: windowWidth/7,
      backgroundColor: '#b0b0b0',
      borderRadius: 5,
      minHeight: 300
   },

   modalHeading: {
      color: 'white', 
      fontSize: 18, 
      flex: 1, 
      alignSelf: 'center', 
      paddingLeft: 18
   },

   modalToolbar: {

    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    backgroundColor: 'black', 
    borderWidth: 0.5, 
    borderColor: 'black', 
    borderTopStartRadius: 5,
    borderTopEndRadius: 5
  },

  closeModalText: {

    color: 'white', 
    fontSize: 30, 
    textAlign: 'center',
    paddingBottom: 6
  },

  closeModalButton: {

    backgroundColor: 'red', 
    height: 30, 
    width: 30, 
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomEndRadius: 0
  },

  professionsList: {

      flexWrap: 'wrap',
      flexDirection: 'row',
      paddingHorizontal: 18,
      paddingVertical: 10
   },
});