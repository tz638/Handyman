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

	review: {
		marginBottom: 10
	},

	reviewMetaInformation: {

		height: 25,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: PRIMARY_LIGHT+"B0",
		alignItems: 'center'
	},

	reviewText: {
		marginVertical: 5
	}
});