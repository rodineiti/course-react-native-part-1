import React, { Component } from 'react';
import { View, Text } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from './src/screens/Feed';
import Perfil from './src/screens/Perfil';

const AppNavigator = createStackNavigator({
  Feed: {
  	screen: Feed
  },
  Perfil: {
  	screen: Perfil
  }
}, {
	initialRouteName: 'Feed',
	headerMode:'float',
	headerBackTitleVisible:false,
	headerLayoutPreset:'center',
	defaultNavigationOptions: {		
        headerBackImage: () => (
            <Text>Voltar</Text>
        )
	}
});

export default createAppContainer(AppNavigator);