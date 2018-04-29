import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
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

export default class CompletedReviews extends Component<{}>  {

  constructor(props) {
    super(props);  
    this.state = { 
      
      reviews: [{name: 'Enes Krijestorac', service: 'car mechanic', picture: require('../../Pictures/user.png'), date: new Date(), rating: 5, text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. "},
                {name: 'Prasant Adhikari', service: 'tiler', picture: require('../../Pictures/user.png'), date: new Date(), rating: 3, text: "Vivamus dapibus risus lectus mus phasellus quisque, dolor mattis non hac gravida ligula praesent, commodo ac arcu ullamcorper parturient. Risus senectus ridiculus nunc venenatis facilisis malesuada condimentum, lectus iaculis tempus egestas ultricies habitant inceptos, hendrerit etiam nibh non mattis augue. "},
                {name: 'Frederik Brinck Jensen', service: 'babysitter', picture: require('../../Pictures/user.png'), date: new Date(), rating: 4, text: "Elementum nec cras duis proin class odio auctor magnis, mus convallis diam parturient faucibus tincidunt dignissim porttitor mollis, adipiscing torquent magna dictumst a tortor nascetur. Dolor mus aptent vehicula elementum elit suscipit, quam risus bibendum platea enim eros, mauris malesuada ligula dictumst molestie. "},
                {name: 'Jovan Jovancevic', service: 'electrician', picture: require('../../Pictures/user.png'), date: new Date(), rating: 4, text: "Quam malesuada pellentesque ridiculus risus mi curabitur commodo fames, erat ligula etiam hendrerit viverra nisl faucibus dapibus nascetur, dis non neque proin praesent morbi fermentum. Duis aliquam tincidunt tortor suspendisse lacinia sapien cum volutpat litora, fringilla orci quisque ipsum blandit at elit. Quam malesuada pellentesque ridiculus risus mi curabitur commodo fames, erat ligula etiam hendrerit viverra nisl faucibus dapibus nascetur, dis non neque proin praesent morbi fermentum. Duis aliquam tincidunt tortor suspendisse lacinia sapien cum volutpat litora, fringilla orci quisque ipsum blandit at elit."},
                {name: 'Tarik Zulfikarpasic', service: 'mover', picture: require('../../Pictures/user.png'), date: new Date(), rating: 2, text: "Consequat aliquam nec lorem phasellus massa aliquet aenean, ridiculus gravida quisque commodo viverra. Sed felis sociis adipiscing augue amet vehicula duis, cras nisi fermentum odio morbi."}],

      modalVisible: false,
      reviewee: {}
    };
  }

  componentDidMount = () => {

  }

  toggleModal = (visible, review) => {

    this.setState({modalVisible: visible,
                   reviewee: review})
  }

  noReviewsPlaceholder = () => {

    return (

      <View>
        <Text>You have not written any reviews yet!</Text>
      </View>
    )
  }

  textifyDate = (date) => {

    if (!date) return;

    var day = (date.getDate()<10) ? "0"+date.getDate() : date.getDate();
    var month = (date.getMonth()+1 < 10) ? "0"+(date.getMonth()+1) : date.getMonth()+1;

    return day + "/" + month + "/" + date.getFullYear();
  }

  renderModal = () => {

    return (

      <Modal animationType = {"slide"} 
             visible = {this.state.modalVisible}
             onRequestClose = {() => {} }
             transparent={true}
             style={{flex: 1}}>
         <View style = {styles.completedModal}>              
            <View style={styles.modalToolbar}>
              <Text style={styles.modalHeading}>{this.state.reviewee.name}</Text>
            </View>
            <View style={styles.modalContent}>
              <View style = {styles.modalDateAndRating}>
                <Text style={styles.modalDate}>
                  {this.textifyDate(this.state.reviewee.date)}
                </Text>
                <View style={styles.modalStarRatingContainer}>
                  <StarRating disabled={true}
                              halfStarEnabled={false}
                              maxStars={5}
                              starSize={15}
                              fullStarColor={PRIMARY}
                              rating={this.state.reviewee.rating}>
                  </StarRating>
                </View>
              </View>
              <ScrollView style={styles.reviewTextContainer}>
                <Text style={styles.reviewText}>{this.state.reviewee.text}</Text>
              </ScrollView>
              <TouchableOpacity onPress={() => {this.toggleModal(false, "")}}
                                style={[styles.closeModalButton]}>
                <Text style={[styles.closeModalText]}>Close</Text>
              </TouchableOpacity>
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
      <TouchableOpacity style={[styles.reviewContainer]}
                        onPress={() => this.toggleModal(true, review)}>
        <View style={styles.pictureContainer}>
          <Image style={styles.profilePicture}
               source={review.picture}/>
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.resultName}>{review.name}</Text>
          <View style={styles.dateAndRating}>
            <Text style={styles.resultDate}>{this.textifyDate(review.date)}</Text>
            <View style={styles.starRatingContainer}>
              <StarRating disabled={true}
                          halfStarEnabled={false}
                          maxStars={5}
                          starSize={15}
                          fullStarColor={PRIMARY}
                          rating={review.rating}>
              </StarRating>
            </View>
          </View>
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

          this.noReviewsPlaceholder() :

          this.renderReviews()
        }
      </ScrollView>
   );
  }
}

