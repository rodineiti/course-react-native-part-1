import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';

const AppNavigator = createDrawerNavigator({
  Tela1: {
    screen: Tela1,
  },
  Tela2: {
    screen: Tela2
  }
}, {
  unmountInactiveRoutes: true
});

export default createAppContainer(AppNavigator);