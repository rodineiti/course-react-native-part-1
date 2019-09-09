import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native'

export default class HomeProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.navigation.state.params.products
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        tabBarLabel: 'Home',
        tabBarIcon:({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('./../../assets/images/home_azul.png')} style={styles.icone} />
                )
            } else {
                return (
                    <Image source={require('./../../assets/images/home_preto.png')} style={styles.icone} />
                )
            }
        }
    });

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
					data={this.state.list} 
					renderItem={({item}) => <ListItem data={item} />} />
            </View>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click () {
        
    }

    render() {
        return (
            <TouchableHighlight onPress={this.click} underlayColor="#CCCCCC">
                <View style={[styles.item]}>
                    <Image resizeMode="contain" source={this.props.data.img} style={styles.img} />
                    <View>
                        <Text style={styles.name}>{this.props.data.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#CCCCCC'
    },
    icone: {
        width:26,
        height:26
    },
    item: {
        height:100,
        backgroundColor:'#FFFFFF',
        margin:10,
        borderRadius:5,
        padding:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    img: {
        width:150,
        height:80,
    },
    name: {
        fontSize:16,
    },
});
