import React from 'react';
import { StyleSheet, Text, View, YellowBox, ScrollView, Image } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import { Icon as ElementsIcon } from 'react-native-elements';

import BookmarkScreen from './Screens/BookmarkScreen/BookmarkScreen.js';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen.js';
import ResultsScreen from './Screens/ResultsScreen/ResultsScreen.js';
import ReviewsScreen from './Screens/ReviewsScreen/ReviewsScreen.js';
import HomeScreen from './Screens/HomeScreen/HomeScreen.js';
import ServicesScreen from './Screens/ServicesScreen/ServicesScreen.js';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen.js';

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from './masterStyle.js';

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Image style={{marginLeft: 20, height: 120, width: 120}}
             source={require('./Pictures/handyman.jpg')}>
      </Image>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const Drawer = DrawerNavigator({
  
  
  Home: { 

    screen: StackNavigator({ screen: HomeScreen }),
    navigationOptions: {

        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (<ElementsIcon name='home'
                                                    type='material-community'
                                                    color={tintColor}/>),
    }
  },
  Services: { 

    screen: StackNavigator({ screen: ServicesScreen }),
    navigationOptions: {

        drawerLabel: 'My Services',
        drawerIcon: ({tintColor}) => (<ElementsIcon name='wrench'
                                                    type='material-community'
                                                    color={tintColor}/>),

    }
  },
  Reviews: { 

    screen: StackNavigator({ screen: ReviewsScreen }),
    navigationOptions: {

        drawerLabel: 'My Reviews',
        drawerIcon: ({tintColor}) => (<ElementsIcon name='message-draw'
                                                    type='material-community'
                                                    color={tintColor}/>),
    } 
  }, 
  Bookmark: { 

    screen: StackNavigator({ screen: BookmarkScreen }),
    navigationOptions: {

        drawerLabel: 'My Bookmarks',
        drawerIcon: ({tintColor}) => (<ElementsIcon name='bookmark'
                                                    type='material-community'
                                                    color={tintColor}/>),
    } 
  },
  Settings: { 

    screen: StackNavigator({ SettingsScreen }),
    navigationOptions: {

        drawerLabel: 'Settings',
        drawerIcon: ({tintColor}) => (<ElementsIcon name='settings'
                                                    type='material-community'
                                                    color={tintColor}/>),
    } 
  }, 
},

  {
    drawerWidth: 200,
    drawerBackgroundColor: PRIMARY_DARK,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {

      activeTintColor: 'white',
      inactiveTintColor: PRIMARY_LIGHT,

    },
  }  

);

const SimpleApp = StackNavigator(

  {  
    Drawer: { 

      screen: Drawer, 
      navigationOptions: {
        headerMode: 'screen',
        header: (<View style={{flex: 0}}></View>)
      }
    },
  },

  

)

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

