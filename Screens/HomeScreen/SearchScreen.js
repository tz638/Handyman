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

import {Icon as ElementsIcon} from 'react-native-elements';

import Profession from '../../Components/Profession/Profession.js';
import Professions from '../../Professions.js';
import Users from '../../Users.js';

import {
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT
} from '../../masterStyle.js';
import styles from './styles.js';

var self;

export default class SearchScreen extends React.Component {
  
  static navigationOptions = {

    header: null
  }

  constructor(props) {

  	super(props);
  	this.state={

      allProfessions: [],
      users: new Users(),
      name: '',
      loading: false
  	};
    self=this;
  }

  componentDidMount = () => {

    this.setState({allProfessions: Object.keys(Professions)});
  }

  navigateToResults = (nameProvided, nameOrProfession) => {

    var users;
    if (nameProvided)
      users = this.state.users.getAllByName(nameOrProfession);
    else 
      users = this.state.users.getAllByProfession(nameOrProfession);
    this.props.navigation.navigate('Results', {users: users})
  }

  capitalizeFirstLetter = (string) => {
   
   return string.charAt(0).toUpperCase() + string.slice(1);
  }

  keyExtractor = (item, index) => item+"";

  render() {

    if (this.state.loading)

      return (<View style={[styles.activityIndicator]}>
                <ActivityIndicator size="large"/>
              </View>)

    return (
      <ScrollView style={[styles.container]}>
        <View>
          <View style={[styles.categoriesContainer]}>
            {this.state.allProfessions.map((p, i) => {
                return (
                      <View style={[styles.categoryContainer]}
                            key={i}>
                        <Profession name={p}                                    
                                    onPress={() => {this.navigateToResults(false, p)}}
                                    contentContainerStyle={[styles.professionContainer]}
                                    style={[styles.categoryIcon]}>
                        </Profession>
                        <Text style={[styles.categoryName]}>
                        {this.capitalizeFirstLetter(p)}
                        </Text>
                      </View>)                      
              })
            }
          </View>
        </View>        
      </ScrollView>
    );
  }
}