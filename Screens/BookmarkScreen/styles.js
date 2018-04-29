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

  noBookmarksContainer: {

    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },

  resultName: {

    fontSize: 18, 
    flex: 1, 
    textAlignVertical: 'top',
  },

  resultDistance: {

    width: 90,
    fontSize: 14, 
    justifyContent: 'flex-start', 
    color: PRIMARY,
    textAlignVertical: 'center',
  },

  professionsContainer: {
    flex: 1,
  },

  bookmarkContainer: {

    height: 60, 
    borderBottomWidth: 0.2, 
    marginBottom: 15, 
    flexDirection: 'row',
    flex: 1
  },

  removeBookmarkIconContainer: {

    width: 40, 
    justifyContent: 'center', 
    alignItems: 'center',
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

 bookmarkProfession: {

    width: 25, 
    height: 25,
    marginRight: 5
  },

  distanceAndProfessions: {

    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'flex-start'
  },

});