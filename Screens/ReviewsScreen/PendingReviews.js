import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  Modal
} from 'react-native';

import StarRating from 'react-native-star-rating';
import Profession from '../../Components/Profession/Profession.js';

import {
  PRIMARY,
} from '../../masterStyle.js';
import styles from './styles.js';

/* A review becomes a pending review as soon as the service is booked
   The date on the review is the date when the service was provided */

export default class PendingReviews extends Component<{}>  {

  constructor(props) {
    super(props);  
    this.state = { 
      
      reviews: [{name: 'Jovan Jovancevic', service: 'electrician', picture: require('../../Pictures/user.png'), date: new Date()},
      			{name: 'Tarik Zulfikarpasic', service: 'mover', picture: require('../../Pictures/user.png'), date: new Date()}],

      reviewee: {},
      modalVisible: false,
      starCount: 0
    };
  }

  componentDidMount = () => {

  }

  toggleModal = (visible, review) => {

    this.setState({modalVisible: visible,
                   reviewee: review,
               	   starCount: 0})
  }

  noPendingReviewsPlaceholder = () => {

    return (

      <View>
        <Text>You have no reviews pending!</Text>
      </View>
    )
  }

  textifyDate = (date) => {

  	var day = (date.getDate()<10) ? "0"+date.getDate() : date.getDate();
  	var month = (date.getMonth()+1 < 10) ? "0"+(date.getMonth()+1) : date.getMonth()+1;

  	return day + "/" + month + "/" + date.getFullYear();
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  renderModal = () => {

    return (

      <Modal animationType = {"slide"} 
             visible = {this.state.modalVisible}
             onRequestClose = {() => {} }
             transparent={true}>
         <View style = {styles.pendingModal}>              
            <View style={styles.modalToolbar}>
              <Text style={styles.modalHeading}>{this.state.reviewee.name}</Text>
            </View>
            <View style={styles.modalContent}>
              <View style = {styles.modalDateAndRating}>
                <Text style={styles.modalDate}>
                  {this.textifyDate(new Date())}
                </Text>
                <View style={styles.modalStarRatingContainer}>
                  <StarRating disabled={false}
                              halfStarEnabled={false}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              fullStarColor={PRIMARY}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}>
                  </StarRating>
                </View>
              </View>
              <ScrollView style={styles.reviewTextContainer}>
                <TextInput style={styles.reviewText}
                		   underlineColorAndroid='transparent'
                		   multiline={true}
                		   placeholder="Write your review here"
                		   placeholderTextColor="#888888">
                </TextInput>
              </ScrollView>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              	<TouchableOpacity onPress={() => {this.toggleModal(false, "")}}
	                              style={[styles.closeModalButton, {flex: 0.45}]}>
	                <Text style={[styles.closeModalText]}>Close</Text>
	            </TouchableOpacity>
	            <TouchableOpacity onPress={() => {/* Code for pushing a review to the database */}}
	                              style={[styles.closeModalButton, {backgroundColor: 'darkgreen', flex: 0.45}]}>
	                <Text style={[styles.closeModalText]}>Submit</Text>
	            </TouchableOpacity>
              </View>
            </View>
         </View>
      </Modal>   
    );
  }

  renderReviews = () => {

  	return (

  		<View>
	  		{this.renderModal()}
	  		<FlatList data = {this.state.reviews}
	  				  renderItem = {({item}) => this.renderReview(item)}
	  				  keyExtractor = {this.keyExtractor}
	  				  scrollable={true}>
	  		</FlatList>
  		</View>
  	)
  }

  renderReview = (review) => {

  	return (
  		<TouchableOpacity style={styles.reviewContainer}
  						  onPress={() => this.toggleModal(true, review)}>
  			<View style={styles.pictureContainer}>
  				<Image style={styles.profilePicture}
  					   source={review.picture}/>
  			</View>
  			<View style={styles.textsContainer}>
  				<Text style={styles.resultName}>{review.name}</Text>
  				<Text style={styles.resultDate}>{this.textifyDate(review.date)}</Text>
  			</View>
  			<View style={styles.reviewProfession}>
  				<Profession name={review.service}
  							style={styles.reviewProfession}
  							disabled={true}/>
  			</View>
  		</TouchableOpacity>
  	)
  }

  keyExtractor = (item, index) => item+"";

  render() {

    return (
      <ScrollView style = {[styles.container, (this.state.modalVisible) ? styles.dimForModal : null]}
                  contentContainerStyle={(this.state.reviews.length==0) ? 
                                          styles.noReviewsContainer : 
                                          null}>
        {
          this.state.reviews.length==0 ? 

          this.noPendingReviewsPlaceholder() :

          this.renderReviews()
        }
      </ScrollView>
   );
  }
}

