import React from 'react';
import { Text, 
		 View,
		 Image,
		 TouchableOpacity,
		 FlatList,
		 ScrollView
		} from 'react-native';

import StarRating from 'react-native-star-rating';

import Profession from '../../Components/Profession/Profession.js';
import Review from '../../Components/Review/Review.js';

import styles from './styles.js';

import {
  PRIMARY
} from '../../masterStyle.js';

export default class ProfileScreen extends React.Component {
  
  constructor(props) {

  	super(props);
  	this.state={
  		professionData: this.props.navigation.state.params.item.professions,
  		reviewData: [{name: "Tarik Zulfikarpasic", date: "27 April 2017", rating: 2, text: "Don't come back"},
  					 {name: "Tari afjarpc", date: "26 April 2028", rating: 1, text: "Terrible"},
  					 {name: "Tjahfjaic", date: "27 April 1917", rating: 3, text: "Alright but nothing special"},
  					 {name: "Tajhfac", date: "14 April 2014", rating: 5, text: "This is the best service that I've ever had. She did everything that was expected, showed up on time, and also brought her own equipment."},
  					],
  		personalInformation: {
        name: this.props.navigation.state.params.item.name, 
			  distance: this.props.navigation.state.params.item.distance, 
			  price: this.props.navigation.state.params.item.price, 
			  profilePicture: this.props.navigation.state.params.picture,
			  rating: this.props.navigation.state.params.item.rating
      }
  	};
  }

  renderProfession = (item) => {

  	return <Profession name={item}/>;
  }

  renderReview = (item) => {

  	return (<Review name={item.name}
  				    date={item.date}
  				    rating={item.rating}
  				    text={item.text}/>);
  }

  keyExtractor = (item, index) => item+"";

  render() {
    return (
      <ScrollView style={[styles.container]}>
      	<View style={[styles.informationContainer]}>
	      	<Image source={this.state.personalInformation.profilePicture}
	      		   style={[styles.profilePicture]}/>
      		<View style={[styles.textButton]}>
      			<View style={[styles.nameDistancePrice]}>
      				<View style={[styles.nameDistance]}>
      					<Text style={[styles.name]}>{this.state.personalInformation.name}</Text>
			      		<Text style={[styles.distance]}>{this.state.personalInformation.distance} km away</Text>
      				</View>
			      	<Text style={[styles.price]}>${this.state.personalInformation.price}</Text>
		    	  </View>
  		    	<TouchableOpacity onPress={() => {}}
  						      	  style={[styles.requestServiceButton]}>
  					  <Text style={[styles.requestServiceText]}>Request Service</Text>
  			    </TouchableOpacity>
      		</View>
	      </View>
  	    <View style = {[styles.professionIconsContainer]}>
  	    	<FlatList data={this.state.professionData}
  	    			  renderItem={({item}) => this.renderProfession(item)}
  	    			  keyExtractor={this.keyExtractor}
  	    			  horizontal
                scrollable={true}/>   	
  	    </View>
  	    <View style={[styles.ratingInformation]}>
  		    <StarRating disabled={true}
  		    			rating={this.state.personalInformation.rating}
  		    			halfStarEnabled={true}
  		    			maxStars={5}
  		    			starSize={25}
  		    			fullStarColor={PRIMARY}/>
  		    <Text style={[styles.starRatingText]}>({this.state.personalInformation.rating} out of 5)</Text>
  	    </View>
  	    <View style={[styles.reviewContainer]}>
      		<FlatList data={this.state.reviewData}
      				  renderItem={({item}) => this.renderReview(item)}
      				  keyExtractor={this.keyExtractor}
                scrollable={true}/>
  	    </View>
      </ScrollView>
    );
  }
}