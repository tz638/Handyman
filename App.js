import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from './Firebase/store';
const store = configureStore();

import HandymanApp from './Screens/InitialScreen/HandymanApp';

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings([]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Setting a timer',
    'Warning: componentWillUpdate is deprecated'
  ]);

export default class App extends Component<{}> {

  constructor(props)  {

    super(props);
  }

  render()  {

    return (
      <Provider store={store}>
        <HandymanApp />
      </Provider>
    );
  }
}
