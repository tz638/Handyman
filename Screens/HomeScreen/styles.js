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
const width = (windowWidth-30)/4

export default StyleSheet.create({

  container: CONTAINER,

  professionContainer: {

    height: 70, 
    width: width-30, 
    alignSelf: 'center', 
    borderColor: PRIMARY_DARK, 
    borderWidth: 0.2, 
    borderRadius: 10
  },

  categoryContainer: {

    width: width, 
    height: 120, 
    marginBottom: 0
  },

  categoryIcon: {

    height:  70, 
    width:  width-30, 
    borderWidth: 0, 
    borderRadius: 0
  },

  categoriesContainer: {

    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    padding: 5, 
    paddingBottom: 15
  },

  categoryName: {

    textAlign: 'center', 
    textAlignVertical: 'center', 
    color: PRIMARY_DARK, 
    fontSize: 13
  },

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

  searchBar: {

    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    borderRadius: 5,
  },

  textInput: {

    flex: 1, 
    backgroundColor: 'white', 
    borderRadius: 5, 
    padding: 5, 
    color: PRIMARY_DARK, 
    textDecorationLine: 'none', 
    fontSize: 16
  },

  searchIconContainer: {

    width: 30, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  activityIndicator: {
    flex: 1, 
    justifyContent:'center'
  },

});