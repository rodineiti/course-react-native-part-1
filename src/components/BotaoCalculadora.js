import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class BotaoCalculadora extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            botao: {
                flex:props.flex || 1,
                justifyContent:'center',
                alignItems:'center',
                borderWidth:1,
                borderColor:'#999999',
                backgroundColor:props.background || '#E0E0E0'
            },
            btnText: {
                fontSize:18,
                fontWeight: (props.background) ? 'bold' : 'normal'
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
                <Text style={this.styles.btnText}>{this.props.texto}</Text>
            </TouchableOpacity>
        );
    }
}