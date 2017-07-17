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

export default class RailAppForEmulate extends Component {
  render() {
    return (
      <WebView 
        source={{uri: 'https://www.zhdbilety.kz/'}} 
        userAgent="rail-bestar-android/1.0" />
    );
  }
}


AppRegistry.registerComponent('RailAppForEmulate', () => RailAppForEmulate);
