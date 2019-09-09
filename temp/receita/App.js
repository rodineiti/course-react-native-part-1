import React, { Component } from 'react';
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Lista from './src/Lista'
import Receita from './src/Receita'

const TabNavigator = createStackNavigator({
	Lista: {
		screen: Lista
	},
	Receita: {
		screen: Receita
	}
});

export default createAppContainer(TabNavigator);