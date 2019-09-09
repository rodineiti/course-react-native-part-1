import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Tela1 extends Component {

    render() {
        return (
            <View>
                <Text> Tela 1 </Text>

                <Button title="Menu" onPress={() => this.props.navigation.toggleDrawer()} />

                <Button title="Rodinei" onPress={() => this.props.navigation.navigate('Tela2', {
                    nome: 'Rodinei'
                })} />
                <Button title="Usuário2" onPress={() => this.props.navigation.navigate('Tela2', {
                    nome: 'Usuário 2'
                })} />
            </View>
        )
    }
}
