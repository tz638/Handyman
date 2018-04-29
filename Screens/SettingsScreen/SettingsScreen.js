import React, { Component } from 'react';
import {
  Alert,
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

import { Icon as ElementsIcon } from 'react-native-elements';

import Profession from '../../Components/Profession/Profession.js';
import Professions from '../../Professions.js';
import Header from '../../Components/Header/Header.js'

import styles from './styles.js';

var self;

export default class SettingsScreen extends Component<{}>  {

  static navigationOptions = {

    header: (<Header leftIcon = 'menu'
                     title = 'My Settings'
                     rightIcon = 'settings'
                     onLeftIconPress = {() => self.props.navigation.navigate('DrawerOpen')}/>)
  }

  constructor(props) {
    super(props);  
    this.state = { 
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      province: "",
      country: "",
      myProfessions: [{name: 'electrician'}, {name: 'welder'}],
      modalVisible: false,
      allProfessions: []
    };
    self=this;
  }

  componentDidMount = () => {

    this.setState({allProfessions: Object.keys(Professions)});
  }

  capitalizeFirstLetter = (string) => {
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  toggleModal = () => {this.setState({modalVisible: !this.state.modalVisible})}

  renderProfession = (item) => {

    return (<View style={{alignItems: 'center', marginRight: 10}}>
              <Profession name={item.name}
                          onLongPress = {() => { this.removeProfession(item.name)}}/>
              </View>);
  } 

  removeProfession = (name) => {

    var capitalizedName = this.capitalizeFirstLetter(name);

    Alert.alert(
      'Confirm Removal',
      'Are you sure you want to remove '+capitalizedName+' from your profile?',
      [
        {text: 'Yes', onPress: () => {var professions = this.state.myProfessions;
                                    professions = professions.filter(function(profession) {
                                        return profession.name !== name;
                                    });
                                    this.setState({myProfessions: professions});}},

        {text: 'No', onPress: () => {}}
      ],
      { cancelable: false }
    )
  } 

  addProfession = (name) => {

    var myProfessions = this.state.myProfessions;
    var haveProfession = false; 
    var capitalizedName = this.capitalizeFirstLetter(name);

    myProfessions.forEach((child) => {

      if (child.name == name) {

        Alert.alert("Error", capitalizedName+" is your profession already!"); 
        haveProfession=true;
      }
    })

    if (haveProfession) return;

    Alert.alert(
      'Confirm Addition',
      'Are you sure you want to add '+ capitalizedName+' to your profile?',
      [
        {text: 'Yes', onPress: () => {var newProfession = {"name": name}
                                      var professions = this.state.myProfessions.concat(newProfession);
                                      this.setState({myProfessions: professions});}},
        {text: 'No', onPress: () => {}}
      ],
      { cancelable: false }
    )
  }

  keyExtractor = (item, index) => item.name+"";

  render() {

    return (
      <ScrollView style = {[styles.container]}>
        <Modal animationType = {"fade"} 
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }
               transparent={true}
               style={{flex: 1}}>
           <View style = {styles.modal}>              
              <View style={styles.modalToolbar}>
                <Text style={styles.modalHeading}>Add Profession</Text>
                <View style={[styles.addProfessionContainer]}>
                  <TouchableOpacity onPress={() => {this.toggleModal()}}
                                    style={[styles.closeModalButton]}>
                    <Text style={[styles.closeModalText]}>x</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.professionsList}>
                {
                  this.state.allProfessions.map((p, i) => {
                    return (<Profession name={p}
                                        key={i}
                                        onPress={() => {this.addProfession(p)}}>
                            </Profession>)                      
                  })
                }
              </View>
           </View>
        </Modal>    
        <KeyboardAvoidingView behavior='position'
                              keyboardVerticalOffset={90}>
          
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={[styles.profilePictureContainer]} 
                              onPress = {() => {() => {/* Update picture */}}}>
              <Image style={[styles.profilePicture]} 
                     source={require('../../Pictures/user.png')}/>
            </TouchableOpacity>
            <View style={[styles.professionsContainer]}>
              <View style={[styles.professionIconsContainer]}>
                <FlatList data={this.state.myProfessions}
                          renderItem={({item}) => this.renderProfession(item)}
                          keyExtractor={this.keyExtractor}
                          scrollable={true}
                          horizontal>
                </FlatList>   
              </View>
              <TouchableOpacity style={[styles.confirmationButton, {backgroundColor: 'darkgreen'}]}
                                onPress={() => {this.toggleModal()}}>
                <Text style={styles.confirmationText}>Add profession</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inputsContainer]}>
            <View style={[styles.personalInformation]}>
              <TextInput  placeholder="First Name"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(name) => {this.setState({firstName: name})}}
                          value={this.state.firstName}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="Last Name"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(lastName) => {this.setState({lastName: lastName})}}
                          value={this.state.lastName}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="Email"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='none'
                          onChangeText={(email) => {this.setState({email: email})}}
                          value={this.state.email}
                          keyboardType='email-address'
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="Phone number"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          onChangeText={(phone) => {this.setState({phone: phone})}}
                          value={this.state.phone}
                          keyboardType='phone-pad'
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>
            </View>
            <View style={[styles.addressInformation]}>
              <TextInput  placeholder="Street Name"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(street) => {this.setState({street: street})}}
                          value={this.state.street}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="City"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(city) => {this.setState({city: city})}}
                          value={this.state.city}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="Province"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(province) => {this.setState({province: province})}}
                          value={this.state.province}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>

              <TextInput  placeholder="Country"
                          placeholderTextColor="#888888"
                          returnKeyType='next'
                          autoCapitalize='words'
                          onChangeText={(country) => {this.setState({country: country})}}
                          value={this.state.country}
                          underlineColorAndroid={'transparent'} 
                          style={[styles.textField]}/>
            </View>
          </View>
          <TouchableOpacity style={styles.confirmationButton}
                            onPress={() => {/* Save changes */}}>
            <Text style={styles.confirmationText}>Confirm changes</Text>
          </TouchableOpacity>  
        </KeyboardAvoidingView> 
      </ScrollView>
   );
  }
}

