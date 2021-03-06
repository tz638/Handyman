import React from 'react';
import { 
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import StarRating from 'react-native-star-rating';
import {Icon as ElementsIcon} from 'react-native-elements';

import Profession from '../../Components/Profession/Profession.js';

import {
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './styles.js';

export default class ResultsScreen extends React.Component {
  
  static navigationOptions = {

    header: null
  }

  constructor(props) {

  	super(props);
  	this.state={
  		
      results: this.props.navigation.state.params.users,
      buttonSortsDescending: true,
      sortingParameter: 'price',
      picture: require('../../Pictures/user.png'),
  	};
  }

  componentDidMount = () => {

  }

  sortResults = () => {

    var results = this.state.results,
        buttonSortsDescending = this.state.buttonSortsDescending,
        sortingParameter = this.state.sortingParameter;

    results.sort((a, b) => {
      if (buttonSortsDescending)
        return b[sortingParameter]-a[sortingParameter];
      return a[sortingParameter]-b[sortingParameter];
    });

    this.setState({results: [].concat(results)});
  }

  renderParameterButton = () => {
   
    return (
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={[styles.sortingParameterContainer]}
                          onPress={() => this.changeSortingParameter()}>
          <Text style={[styles.sortingParameterText]}>
          {this.state.sortingParameter.toUpperCase()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sortingArrowStyle]}
                          onPress={()=>this.changeSortingType()}>
          <ElementsIcon color={PRIMARY_DARK}
                        name={this.state.buttonSortsDescending ? 'arrow-down' : 'arrow-up'}
                        type='material-community'
                        underlayColor='transparent'>
          </ElementsIcon>
        </TouchableOpacity>
      </View>
    )
  }

  renderSortButton = () => {

    return (
      <TouchableOpacity style={[styles.sortButtonContainer]}
                        onPress={() => this.sortResults()}>
          <Text style={[styles.sortButtonText]}>
            SORT
          </Text>
        </TouchableOpacity>
    )
  }

  changeSortingType = () => {

    /* Sort by the other criterium */
    this.setState({buttonSortsDescending: !this.state.buttonSortsDescending});
  }

  changeSortingParameter = () => {

    var parameters=['price', 'rating', 'distance'],
        currentParameter=this.state.sortingParameter;

    var length=parameters.length;
    var index=parameters.indexOf(currentParameter);
    var nextParameter=parameters[(index+1)%length];

    this.setState({sortingParameter: nextParameter});
  }

  renderProfession = (item) => {

    return (
      <Profession disabled={true}
                  name={item}
                  key={item}
                  style={[styles.professionSize]}>
      </Profession>
    )
  }

  renderResult = (item) => {

    return (

      <View style={[styles.resultsContainer]}>
        <TouchableOpacity style={[styles.profilePicture]}
                          onPress={() => this.navigateToProfile(item)}>
          <Image source={this.state.picture}
                 style={styles.profilePicture}>
          </Image>
        </TouchableOpacity>
        <View style={[styles.informationContainer]}>
          <View style={[styles.informationRow]}>
            <TouchableOpacity style={{flex: 1}}
                              onPress={() => this.navigateToProfile(item)}>
              <Text style={[styles.resultName]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <View style={[styles.resultRating]}>
              <StarRating disabled={true}
                        halfStarEnabled={true}
                        maxStars={5}
                        starSize={15}
                        fullStarColor={PRIMARY}
                        rating={item.rating}/>
            </View>
          </View>
          <View style={[styles.informationRow]}>
            <Text style={[styles.resultDistance]}>
              {item.distance} km away
            </Text>
            <View style={[styles.resultProfessionsContainer]}>
              <FlatList data={item.professions}
                        renderItem={({item}) => this.renderProfession(item)}
                        horizontal
                        keyExtractor={this.keyExtractor}
                        scrollable={true}>
              </FlatList>
            </View>
            <Text style={[styles.resultPrice]}>
              ${item.price}
            </Text>
          </View>
        </View>
      </View>

    )
  }

  navigateToProfile = (item) => {

    this.props.navigation.navigate('Profile', 
                                  {picture: this.state.picture,
                                  item})
  }

  renderActivityIndicator = () => {

    return (
      <View style={[styles.activityIndicator]}>
        <ActivityIndicator size="large"/>
      </View> )
  }

  keyExtractor = (item, index) => item+"";

  render() {

    return (
      <View style={[styles.container]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.foundResultsText]}>
            Found {this.state.results.length} results 
          </Text>
          <View style={[styles.buttonsContainer]}>
            {this.renderParameterButton()}
            {this.renderSortButton()}
          </View>
        </View>

        <FlatList data={this.state.results}
                  renderItem={({item}) => this.renderResult(item)}
                  keyExtractor={this.keyExtractor}
                  pagingEnabled={true}>
        </FlatList> 

      </View>
    );
  }
}