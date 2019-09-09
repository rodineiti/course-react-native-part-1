import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Feed extends Component {

    static navigationOptions = {
        title: 'Feed',
        headerRight:<Text>Voltar</Text>
    };

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                <Text style={{textAlign:'center'}}> Feed </Text>
                <Button title="Ir para Perfil" onPress={() => this.props.navigation.navigate('Perfil')} />
            </View>
        )
    }
}
