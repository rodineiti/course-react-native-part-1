import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, FlatList } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

export default class Receita extends Component {

    static navigationOptions = {
        title: 'Receita',
        header: null
    }

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{flex:1,marginTop:20}}>
          <TouchableHighlight underlayColor="#CCCCCC" onPress={this.goBack} style={{width:50,height:26, marginLeft:10,marginTop:5,zIndex:99}}>
              <Text> Back </Text>
          </TouchableHighlight>
          <Image source={{uri:this.props.navigation.state.params.image}} style={{height:200, marginTop:-51}} />
          <TabNavigator screenProps={this.props.navigation.state.params} />
      </View>
    )
  }
}

class Tela1 extends Component {
    static navigationOptions = {
		tabBarLabel: 'Resumo',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:26, marginBottom:10}}>{this.props.screenProps.nome}</Text>
                <Text style={{marginBottom:10, color:'#ff0000'}}>Por: {this.props.screenProps.por}</Text>
                <Text>{this.props.screenProps.descricao}</Text>
            </View>
        )
    }
}

class Tela2 extends Component {
    static navigationOptions = {
		tabBarLabel: 'Ingredientes',
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.screenProps.ingredientes}
                    renderItem={({item}) => <Text style={{fontSize:16, marginBottom:10}}>{item.txt}</Text>} />
            </View>
        )
    }
}

class Tela3 extends Component {
    static navigationOptions = {
		tabBarLabel: 'Preparo',
    };
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.screenProps.modo}
                    renderItem={({item}) => <Text style={{fontSize:16, marginBottom:10}}>{item.txt}</Text>} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		margin:10
	},
	icon: {
		width:26,
		height:26
	}
});

const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
	Tela1: {
		screen: Tela1
	},
	Tela2: {
		screen: Tela2
    },
    Tela3: {
		screen: Tela3
	}
}, {
    animationEnabled:true,
    tabBarOptions: {
        activeTintColor: '#333333',
        inactiveTintColor:'#CCCCCC',
        showIcon:false,
        labelStyle: {
          fontSize: 14,
          height:47,
          lineHeight:47,
        },
        style: {
          backgroundColor: '#EEEEEE',
        },
      }
}));