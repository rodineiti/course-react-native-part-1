import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/screens/Login';
import HomeTab from './src/screens/HomeTab';

const AppNavigator = createStackNavigator({
  Login: {
  	screen: Login
  },
  HomeTab: {
  	screen: HomeTab
  }
}, {
	defaultNavigationOptions: {
		header: null
	}
});

export default createAppContainer(AppNavigator);