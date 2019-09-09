import React, { Component } from 'react';
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Home from './src/screens/Home';
import Contato from './src/screens/Contato';
import Horarios from './src/screens/Horarios';
import Sobre from './src/screens/Sobre';

const Navigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Contato: {
    screen: Contato
  },
  Horarios: {
    screen: Horarios
  },
  Sobre: {
    screen: Sobre
  }
}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		showIcon:true
	}
});

export default createAppContainer(Navigator);