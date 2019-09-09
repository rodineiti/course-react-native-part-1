import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

class Tela1 extends Component {
    static navigationOptions = {
		drawerLabel: 'Tela 1',
		drawerIcon:() => (
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
		drawerLabel: 'Tela 2',
		drawerIcon:() => (
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

const TabNavigator = createDrawerNavigator({
	Tela1: {
		screen: Tela1
	},
	Tela2: {
		screen: Tela2
	}
}, {
	drawerPosition: 'left',
	drawerWidth:150,
	drawerBackgroundColor:'#ffff00',
	drawerOptions: {
		activeTintColor: '#ffffff',
		inactiveTintColor:'#000000',
		activeBackgroundColor:'#ff5500',
		itemsContainerStyle: {
			backgroundColor:'#000000',
			marginTop:100
		},
		itemStyle: {
			height:100
		},
		labelStyle: {
			fontSize:25
		},
		iconContainerStyle: {
			
		}
	}
});

export default createAppContainer(TabNavigator);