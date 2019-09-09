import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MsgItem extends Component {
    constructor(props) {
        super(props);
        this.estilo = styles.balaoLeft;
        if (props.data.m) {
            this.estilo = styles.balaoRight;
        }
    }

    render() {
        return (
            <View style={[styles.balao, this.estilo]}>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
                <Text>{this.props.data.msg}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    balao: {
        backgroundColor:'#FF0000',
        margin:10,
        padding:10,
        borderRadius:10
    },
    nome: {
        fontSize:15,
        fontWeight:'bold'
    },
    balaoLeft: {
        backgroundColor:'#FFFFFF',
        alignSelf:'flex-start',
        marginRight:50
    },
    balaoRight: {
        backgroundColor:'#00FF00',
        alignSelf:'flex-end',
        marginLeft:50
    }
});