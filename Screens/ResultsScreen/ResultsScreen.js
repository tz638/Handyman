import React from 'react';
import { 
  FlatList,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import StarRating from 'react-native-star-rating';

import Users from '../../Users.js';
import Profession from '../../Components/Profession/Profession.js';

import {
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './styles.js';

export default class ResultsScreen extends React.Component {
  
  constructor(props) {

  	super(props);
  	this.state={
  		
      results: this.produceRandomResults(),
  	};
  }

  componentDidMount = () => {

  }

  produceRandomProfessions = () => {

    var possibleProfessions = Object.keys(Users);
    var currentProfessions=[];
    for (var i=0; i<10; i++)  {

      var profession = possibleProfessions[Math.floor(possibleProfessions.length*Math.random())]
      var put = Math.round(Math.random());
      if (put==1 && !currentProfessions.includes(profession))
        currentProfessions.push(profession)
    }
    return currentProfessions;
  }

  produceRandomResults = () => {

    var names = ['Tarik', 'Jovan', 'Fred', 'Prasant', 'Enes'],
        ratings = [1, 2, 3, 4, 5],
        distances = [0.6, 2.3, 1.4, 2.3, 2.2],
        prices= [10, 20, 30, 40, 50],
        results = [];

    var arrays = [names, ratings, distances, prices];
    
    for (var i=0; i<20; i++) {

      var result = [];

      for (var j=0; j<4; j++)  {

        var random = 5*Math.random();
        result.push(arrays[j][Math.floor(random)]);
      }
      var entry = {'name': result[0], 
                  'rating': result[1], 
                  'distance': result[2], 
                  'price': result[3], 
                  'professions': this.produceRandomProfessions()};
      results.push(entry);
    }
    return results;
  }

  renderProfession = (item) => {

    return (
      <Profession disabled={true}
                  name={item}
                  key={item}
                  style={{height: 25, width: 25}}>
      </Profession>
    )
  }

  renderResult = (item) => {

    return (

      <View style={[styles.resultsContainer]}>
        <TouchableOpacity style={[styles.profilePicture]}>
          <Image source={require('../../Pictures/user.png')}
                 style={styles.profilePicture}>
          </Image>
        </TouchableOpacity>
        <View style={[styles.informationContainer]}>
          <View style={[styles.informationRow]}>
            <TouchableOpacity style={{flex: 1}}>
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

  keyExtractor = (item, index) => item+"";

  render() {
    return (
      <View style={[styles.container]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.foundResultsText]}>
            Found {this.state.results.length} results 
          </Text>
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