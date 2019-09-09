import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Botao extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.styles = StyleSheet.create({
            botao: {
                width:props.largura || 250,
                height:props.altura || 50,
                borderWidth:2,
                borderColor:props.color || '#FF0000',
                backgroundColor:'transparent',
                borderRadius:25,
                margin:10
            },
            btnArea: {
                flex:1,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            },
            btnText: {
                color:props.color || '#FF0000',
                fontSize:14,
                fontWeight:'bold'
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
                <View style={this.styles.btnArea}>
                    <Text style={this.styles.btnText}>{this.props.texto}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}