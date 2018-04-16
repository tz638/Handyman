import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ProfileScreen from './Screens/ProfileScreen/ProfileScreen.js';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen.js'

const SimpleApp = StackNavigator({
  
  Settings: { screen: SettingsScreen },
  Profile: { screen: ProfileScreen },
});

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);

export default class App extends React.Component {
  render() {
    return (
      <SimpleApp/>
    );
  }
}

