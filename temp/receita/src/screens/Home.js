import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const HomeTabNavigator = createStackNavigator({
    HomeList: {
      screen: HomeList,
    },
    HomeProducts: {
      screen: HomeProducts
    }
});
  
export default HomeTabNavigator;
