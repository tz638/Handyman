import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, 
         TextInput, 
         TouchableOpacity, 
         Text, 
         Image, 
         ScrollView, 
         KeyboardAvoidingView 
} from 'react-native';

import styles from './Styles';
import { PRIMARY_DARK} from "../../masterStyle.js"


class BasicFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { register: this.props.register,
                   email: '', 
                   password: '',
                   name: '',
                   age: '',
                   gender: 0 };

    this.handleEmailChange = (email) => {
      this.setState({email: email});
    };

    this.handlePasswordChange = (password) => {
      this.setState({password: password});
    };

    this.handleNameChange = (name) => {
      this.setState({name: name});
    };

    this.handleAgeChange = (age) => {
      this.setState({age: age});
    };

    this.setSelectedLanguage = (selectedOption) => {
      this.setState({language:selectedOption});
    }

    this.setSelectedGender = (selectedOption, selectedIndex) => {
      this.setState({gender:selectedIndex});
    }

    this.handleButtonPress = () => {
      if (!this.state.register) this.props.onButtonPress(this.state.email, this.state.password);
      else {
        if (this.state.name=="" || this.state.age=="")  return Alert.alert("Error", "You didn't complete the form!");
        this.props.onButtonPress(this.state.email, 
                                 this.state.password, 
                                 this.state.name, 
                                 this.state.age, 
                                 this.state.language, 
                                 this.state.gender);
      }
    };
  }

  listItems (items) {

    var pickerItems = [], i=0;
    for (i; i<items.length; i++) {
      pickerItems.push(<Item key={i} label={items[i].label} value={items[i].value}/>);
    }
    return pickerItems;
  }

  render() {
    return (
      <KeyboardAvoidingView contentContainerStyle={[styles.Container]}
                            behavior='position'
                            style={{flex: 1}}
                            keyboardVerticalOffset={(!this.state.register) ? (-70) : -180}>

        {!this.state.register && 

          <Image style={styles.logo}
                 source={require('../../Pictures/handyman_logo.png')}/>}

        <TextInput
          style={styles.textInput}
          placeholder='Email'
          returnKeyType='next'
          keyboardType='email-address'
          autoCapitalize='none'
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          underlineColorAndroid={'transparent'} />

        <TextInput
          style={styles.textInput}
          placeholder='Password'
          secureTextEntry={true}
          returnKeyType='next'
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          underlineColorAndroid={'transparent'} />

          {this.state.register && <TextInput
          style={ styles.textInput }
          placeholder="Name"
          returnKeyType='next'
          autoCapitalize='none'
          onChangeText={this.handleNameChange}
          value={this.state.name}
          underlineColorAndroid={'transparent'} />}

          {this.state.register && <TextInput
          style={ styles.textInput }
          placeholder="Age"
          returnKeyType='next'
          keyboardType='numeric'
          autoCapitalize='none'
          onChangeText={this.handleAgeChange}
          value={this.state.age}
          underlineColorAndroid={'transparent'} />}

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleButtonPress}>

          <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>

        </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

BasicFormComponent.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onButtonPress: PropTypes.func.isRequired,
};

export default BasicFormComponent;
