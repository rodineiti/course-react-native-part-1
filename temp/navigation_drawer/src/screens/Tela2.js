import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'

export default class Tela2 extends Component {
    
    static navigationOptions = {
        title: 'Tela 2',
    };

    render() {
        return (
            <View>
                <Text> Tela 2 - Olá, {this.props.navigation.getParam('nome', '')} </Text>
                <Button title="Tela 1" onPress={() => this.props.navigation.navigate('Tela1')} />
            </View>
        )
    }
}
