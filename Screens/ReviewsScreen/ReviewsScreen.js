import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  Modal,
  Platform
} from 'react-native';
import { Icon as ElementsIcon } from 'react-native-elements';

import { TabNavigator, TabBarTop, TabBarBottom } from 'react-navigation';

import PendingReviews from './PendingReviews.js';
import CompletedReviews from './CompletedReviews.js';

import Profession from '../../Components/Profession/Profession.js';
import Professions from '../../Professions.js';
import Header from '../../Components/Header/Header.js'

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './styles.js';

const ReviewTabs = TabNavigator({

  Completed: { screen: CompletedReviews },
  Pending: { screen: PendingReviews }
},

{  navigationOptions: ({ navigation }) => ({
    
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    style: {backgroundColor: PRIMARY},
    indicatorStyle: {backgroundColor: PRIMARY_LIGHT}
  },
  tabBarComponent: (Platform.OS==='ios') ? TabBarBottom : TabBarTop,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
})

var self;

export default class ReviewsScreen extends Component<{}>  {

  static navigationOptions = {

    header: (<Header leftIcon = 'menu'
                     title = 'My Reviews'
                     rightIcon = 'message-draw'
                     onLeftIconPress = {() => self.props.navigation.navigate('DrawerOpen')}/>)
  }

  constructor(props) {
    super(props);  
    this.state = { 
      
    };
    self=this;
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <ReviewTabs>
      </ReviewTabs>
   );
  }
}

