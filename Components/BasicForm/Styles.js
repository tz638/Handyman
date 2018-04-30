import { StyleSheet } from 'react-native';
import { PRIMARY_DARK,
         SECONDARY_DARK,
         WHITE } from "../../masterStyle.js"

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'stretch'
  },
  textInput: {
    backgroundColor: WHITE,
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'stretch'
  },
  button: {
    backgroundColor: PRIMARY_DARK,
    height: 40,
    margin: 10,
    borderRadius: 5,
    padding: 3,
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonTitle: {
    color: SECONDARY_DARK,
    fontSize: 18,
    fontWeight: 'bold'
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginVertical: 30
  }
});
