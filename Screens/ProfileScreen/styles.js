import { StyleSheet,
	   } from 'react-native';

import {
  PRIMARY_DARK,
  PRIMARY,
  PRIMARY_LIGHT,
  SECONDARY,
  CONTAINER
} from '../../masterStyle.js';

export default StyleSheet.create({

	requestServiceButton: {

		borderRadius: 5,
	    padding: 3,
	    alignItems: 'center',
	    justifyContent:'center',
	    backgroundColor: PRIMARY_DARK,
	    flex: 0.35
	},

	requestServiceText: {
		color: SECONDARY,
		fontSize: 18
	},

	profilePicture: {

		height: 120, 
		width: 120, 
		borderColor: PRIMARY_DARK, 
		borderWidth: 5
	},

	container: CONTAINER,

	informationContainer: {
		flexDirection: 'row',
	},

	textButton: {
		paddingHorizontal: 10,
		flex: 1
	},

	nameDistancePrice: {
		
		flex: 0.65,
		flexDirection: 'row',
	},

	nameDistance: {
		flex: 0.7
	},

	name: {
		
		color: PRIMARY_DARK,
		fontSize: 18
	},

	distance: {
		
		color: PRIMARY,
		fontSize: 15
	},

	price: {
		
		fontSize: 30,
		color: PRIMARY_DARK,
		alignSelf: 'center',
		flex: 0.3,
	},

	professionIconsContainer: {

		flexDirection: 'row',
		height: 60,
		borderWidth: 1,
		borderColor: PRIMARY_DARK,
		marginTop: 10,
		alignItems: 'center',
		paddingLeft: 5
	},

	reviewContainer: {

		marginTop: 10,
		marginBottom: 15
	},

	ratingInformation: {
		
		flexDirection: 'row',
		marginTop: 10,
	},

	starRatingText: {

		fontStyle: 'italic', 
		marginLeft: 5, 
		paddingTop: 2
	}
});