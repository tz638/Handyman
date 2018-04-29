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

import Profession from '../../Components/Profession/Profession.js';
import Professions from '../../Professions.js';
import Header from '../../Components/Header/Header.js'

import {
  PRIMARY_LIGHT,
  PRIMARY,
  PRIMARY_DARK
} from '../../masterStyle.js';
import styles from './styles.js';

var self;

export default class BookmarkScreen extends Component<{}>  {

  static navigationOptions = {

    header: (<Header leftIcon = 'menu'
                     title = 'My Bookmarks'
                     rightIcon = 'bookmark'
                     onLeftIconPress = {() => self.props.navigation.navigate('DrawerOpen')}/>)
  }

  constructor(props) {
    super(props);  
    this.state = { 
      
      bookmarks: [{name: "Tarik Zulfikarpasic", distance: '2.5', professions: ['car mechanic', 'welder', 'carpenter', 'tiler', 'babysitter', 'plumber'], picture: require('../../Pictures/user.png')},
                  {name: "Jovan Jovancevic", distance: '200', professions: ['welder', 'carpenter', 'tiler', 'mover'], picture: require('../../Pictures/user.png')}],
    };

    self=this;
  }

  componentDidMount = () => {

  }

  noBookmarksPlaceholder = () => {

    return (

      <View>
        <Text>You do not have any bookmarks yet</Text>
      </View>
    )
  }

  renderBookmarks = () => {

    return (

      <View>
        <FlatList data = {this.state.bookmarks}
              renderItem = {(item) => this.renderBookmark(item)}
              keyExtractor = {this.keyExtractor}
              scrollable={true}>
        </FlatList>
      </View>
    )
  }

  renderProfession = (item) => {

    return (
      <Profession name={item}
                  style={styles.bookmarkProfession}
                  disabled={true}>
      </Profession>
    )
  }

  renderBookmark = (item) => {

    var bookmark = item.item,
        index=item.index;

    return (
      <View style={{flexDirection: 'row'}}>  
        <TouchableOpacity style={[styles.bookmarkContainer]}
                          onPress={() => {/* Redirect to their page */}}>
          <View style={styles.pictureContainer}>
            <Image style={styles.profilePicture}
                 source={bookmark.picture}/>
          </View>
          <View style={styles.textsContainer}>
            <Text style={styles.resultName}>{bookmark.name}</Text>
            <View style={styles.distanceAndProfessions}>
              <Text style={styles.resultDistance}>{bookmark.distance} km away</Text>
              <FlatList style={styles.professionsContainer}
                        data={bookmark.professions}
                        renderItem={({item}) => this.renderProfession(item)}
                        horizontal={true}
                        keyExtractor={this.keyExtractor}>
              </FlatList>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.removeBookmarkIconContainer]}>
          <TouchableOpacity onPress={() => this.removeBookmark(bookmark, index)}>
            <ElementsIcon name='bookmark-remove'
                          color='red'
                          type='material-community'
                          size={32}>
            </ElementsIcon>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  removeBookmark = (bookmark, index) => {

    Alert.alert(
      'Confirm Bookmark Removal',
      'Are you sure you want to remove '+bookmark.name+' from your bookmarks?',
      [
        {text: 'Yes', onPress: () => {var bookmarks = this.state.bookmarks;
                                      bookmarks.splice(index, 1);
                                      this.setState({bookmarks: bookmarks});}},

        {text: 'No', onPress: () => {}}
      ],
      { cancelable: false }
    )
  }

  keyExtractor = (item, index) => item+"";

  render() {

    return (
      <ScrollView style = {[styles.container]}
                  contentContainerStyle={(this.state.bookmarks.length==0) ? 
                                          styles.noBookmarksContainer : 
                                          null}>

        {
          this.state.bookmarks.length==0 ? 

          this.noBookmarksPlaceholder() :

          this.renderBookmarks()
        }
      </ScrollView>
   );
  }
}

