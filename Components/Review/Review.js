import React, { Component } from 'react';
import {
  	View,
  	Text
} from 'react-native';

import styles from './styles.js';

import {
  PRIMARY_DARK
} from '../../masterStyle.js';

import StarRating from 'react-native-star-rating';

export default class Review extends Component {

  constructor(props)	{

  	super(props);
  }

  render = () => {

    return (
        <View style={[styles.review]}>
          <View style={[styles.reviewMetaInformation]}>
            <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>
            <Text style={{fontStyle: 'italic'}}>{this.props.date}</Text>
            <StarRating disabled={true}
              rating={this.props.rating}
              halfStarEnabled={true}
              maxStars={5}
              starSize={15}
              fullStarColor={PRIMARY_DARK}/>
          </View>
          <Text style={[styles.reviewText]}>{this.props.text}</Text>
        </View>
    );
  }
}