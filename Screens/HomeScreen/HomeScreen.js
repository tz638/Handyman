import React from 'react';
import { 
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import {Icon as ElementsIcon} from 'react-native-elements';

import ResultsScreen from '../ResultsScreen/ResultsScreen.js';
import SearchScreen from './SearchScreen.js';
import ProfileScreen from '../ProfileScreen/ProfileScreen.js';

import Header from '../../Components/Header/Header.js';

import {
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT
} from '../../masterStyle.js';
import styles from './styles.js';

var self;

const Home = StackNavigator({

  Search: { screen: SearchScreen },
  Results: { screen: ResultsScreen },
  Profile: { screen: ProfileScreen },
})

export default class HomeScreen extends React.Component {
  
  static navigationOptions = {

    header: (<Header leftIcon = 'menu'
                     onLeftIconPress = {() => self.props.navigation.navigate('DrawerOpen')}
                     center={<View style={[styles.searchBar]}>
                              <TextInput style={[styles.textInput]}
                                         underlineColorAndroid='transparent'
                                         placeholder='Search handymen by name'
                                         placeholderTextColor="#888888"
                                         onChangeText={(text) => {self.setState({name: text})}}>
                              </TextInput>
                              <TouchableOpacity style={[styles.searchIconContainer]}
                                                onPress={() => {self.setState({loading: true}, 
                                                                self.navigateToResults(true, self.state.name))}}>
                                <ElementsIcon color={PRIMARY_DARK}
                                              name='magnify'
                                              type='material-community'>
                                </ElementsIcon> 
                              </TouchableOpacity>
                            </View>} />)
  }

  constructor(props) {

  	super(props);
  	this.state={

  	};
    self=this;
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <Home/>
    );
  }
}