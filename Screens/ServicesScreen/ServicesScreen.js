import React, { Component } from 'react';
import {
  Alert,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Icon as ElementsIcon } from 'react-native-elements';

import Header from '../../Components/Header/Header.js'

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './styles.js';

var self;

export default class ServicesScreen extends Component<{}>  {

  static navigationOptions = {

    header: (<Header leftIcon = 'menu'
                     title = 'My Services'
                     rightIcon = 'wrench'
                     onLeftIconPress = {() => self.props.navigation.navigate('DrawerOpen')}/>)
  }

  constructor(props) {
    super(props);  
    this.state = { 
      
      services: [{name: "Tarik Zulfikarpasic", date: new Date(2017, 11, 25), picture: require('../../Pictures/user.png')},
                  {name: "Jovan Jovancevic", date: new Date(2013, 4, 21), picture: require('../../Pictures/user.png')}],
    };
    self=this;
  }

  componentDidMount = () => {

  }

  textifyDate = (date) => {

    if (!date) return;

    var day = (date.getDate()<10) ? "0"+date.getDate() : date.getDate();
    var month = (date.getMonth()+1 < 10) ? "0"+(date.getMonth()+1) : date.getMonth()+1;

    return day + "/" + month + "/" + date.getFullYear();
  }

  noServicesPlaceholder = () => {

    return (

      <View>
        <Text>You have not provided any services yet</Text>
      </View>
    )
  }

  renderServices = () => {

    return (

      <View>
        <FlatList data = {this.state.services}
              renderItem = {(item) => this.renderService(item)}
              keyExtractor = {this.keyExtractor}
              scrollable={true}>
        </FlatList>
      </View>
    )
  }

  renderService = (item) => {

    var service = item.item,
        index=item.index;

    return (
      <View style={{flexDirection: 'row'}}>  
        <TouchableOpacity style={[styles.serviceContainer]}
                          onPress={() => {/* Redirect to their page */}}>
          <View style={styles.pictureContainer}>
            <Image style={styles.profilePicture}
                 source={service.picture}/>
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.resultName}>{service.name}</Text>
            <Text style={styles.resultDate}>{this.textifyDate(service.date)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

 keyExtractor = (item, index) => item+"";

  render() {

    return (
      <ScrollView style = {[styles.container]}
                  contentContainerStyle={(this.state.services.length==0) ? 
                                          styles.noServicesContainer : 
                                          null}>

        {
          this.state.services.length==0 ? 

          this.noServicesPlaceholder() :

          this.renderServices()
        }
      </ScrollView>
   );
  }
}

