import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Tela1 extends Component {

    render() {
        return (
            <View>
                <Text> Login </Text>

                <Button title="Menu" onPress={() => this.props.navigation.toggleDrawer()} />
                
            </View>
        )
    }
}
