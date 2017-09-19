/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class RailApp extends Component {
  render() {
    return (
      <WebView 
        source={{uri: 'https://www.zhdbilety.kz/'}} 
        userAgent="ZhdBilety-Andriod/1.1" />
    );
  }
}


AppRegistry.registerComponent('Zhdbilety', () => RailApp);
