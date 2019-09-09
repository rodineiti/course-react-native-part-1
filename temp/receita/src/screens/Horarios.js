import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default class Horarios extends Component {

    static navigationOptions = {
        tabBarLabel: 'Horarios',
        tabBarIcon:({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('./../../assets/images/horario_azul.png')} style={styles.icone} />
                )
            } else {
                return (
                    <Image source={require('./../../assets/images/horario_preto.png')} style={styles.icone} />
                )
            }
        }
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icone: {
        width:26,
        height:26
    }
});
