import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Botao from './Botao';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {n:0,b1:'Iniciar',b2:'Zerar'}
        this.timer = null;
        this.iniciar = this.iniciar.bind(this);
        this.zerar = this.zerar.bind(this);
    }

    iniciar() {
        let s = this.state;
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            s.b1 = 'Iniciar'
        } else {
            this.timer = setInterval(() => {
                s.n += 0.1;
                this.setState(s);
            }, 100);
        }
        s.b1 = 'Parar';
    }

    zerar() {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let s = this.state;
        s.n = 0;
        s.b1 = 'Iniciar';
        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>
                <Image source={require('./images/relogio.png')} />
                <Text style={styles.timerText}>{this.state.n.toFixed(1)}</Text>
                <View style={styles.btnArea}>
                    <Botao texto={this.state.b1} largura={150} color="#886532" onPress={this.iniciar} />
                    <Botao texto={this.state.b2} largura={150} color="#886532" onPress={this.zerar} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    timerText: {
        color:'#baa07a',
        fontSize:70,
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:-160
    },
    btnArea: {
        flexDirection:'row',
        marginTop:80
    },
});