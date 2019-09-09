import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Perfil extends Component {
    
    static navigationOptions = {
        title: 'Perfil',
    };

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <Text> Perfil </Text>
            </View>
        )
    }
}
