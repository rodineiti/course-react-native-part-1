import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Login extends Component {

	static navigationOptions = {
		title: 'Login'
	}

    render() {
        return (
            <View>
                <Text> Login </Text>

                <Button title="Login" onPress={() => this.props.navigation.navigate('HomeTab')} />

            </View>
        )
    }
}
