import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

class Tela1 extends Component {
    static navigationOptions = {
		tabBarLabel: 'Tela 1',
		tabBarIcon:() => (
			<Image source={require('./assets/images/icone1.png')} style={styles.icon} />
		)
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> Esta é a tela 1 </Text>
            </View>
        )
    }
}

class Tela2 extends Component {
    static navigationOptions = {
		tabBarLabel: 'Tela 2',
		tabBarIcon:() => (
			<Image source={require('./assets/images/icone2.png')} style={styles.icon} />
		)
    };
    render() {
        return (
            <View style={styles.container}>
                <Text> Esta é a tela 2 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginTop:20
	},
	icon: {
		width:26,
		height:26
	}
});

const TabNavigator = createBottomTabNavigator({
	Tela1: {
		screen: Tela1
	},
	Tela2: {
		screen: Tela2
	}
}, {
	tabBarPosition: 'bottom',
	animationEnabled:false,
	initialRouteName:'Tela1',
	order: ['Tela2','Tela1'],
	tabBarOptions: {
		showIcon:true,
		showLabel:true,
		activeTintColor:'#ff0000',
		inactiveTintColor:'#00ff00',
		upperCaseLabel:true, // só android
		pressColor:'#ff0000', // só android 5+
		scrollEnabled:false, // só android,
		tabStyle: {
			backgroundColor:'#ffff00'
		},
		indicatorStyle: {

		},
		labelStyle: {
			
		},
		iconStyle: {
			
		}
	}
});

export default createAppContainer(TabNavigator);