import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import BotaoCalculadora from './BotaoCalculadora';

export default class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: '0'
        };
        this.char = ['/','*','-','+','.'];

        this.btn = this.btn.bind(this);
    }

    btn(b) {
        let s = this.state;
        if (b == 'C') {
            s.r = '0';
        } else if (b == '=') {
            s.r = eval(s.r); // eval("1+2+9") = 12
        } else {
            if(s.r == '0') {
                if (b == '/' || b == '*' || b == '-' || b == '+' || b == '.') {
                    return;
                }
                s.r = b;
            } else {
                if (this.char.filter(item => item == b).length) {
                    if (this.char.filter(item => item == s.r.substr(s.r.length - 1, 1)).length) {
                        return;
                    }
                }
                s.r += b;
            }
        }

        this.setState(s);
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.linha}>
                    <Text style={styles.result}>{this.state.r}</Text>
                </View>
                <View style={styles.linha}>
                    <BotaoCalculadora flex={3} texto={'C'} background="#CCCCCC" onPress={() => this.btn('C')} />
                    <BotaoCalculadora texto={'/'} background="#fd9536" onPress={() => this.btn('/')} />
                </View>
                <View style={styles.linha}>
                    <BotaoCalculadora texto={'7'} onPress={() => this.btn('7')} />
                    <BotaoCalculadora texto={'8'} onPress={() => this.btn('8')} />
                    <BotaoCalculadora texto={'9'} onPress={() => this.btn('9')} />
                    <BotaoCalculadora texto={'*'} background="#fd9536" onPress={() => this.btn('*')} />
                </View>
                <View style={styles.linha}>
                    <BotaoCalculadora texto={'4'} onPress={() => this.btn('4')} />
                    <BotaoCalculadora texto={'5'} onPress={() => this.btn('5')} />
                    <BotaoCalculadora texto={'6'} onPress={() => this.btn('6')} />
                    <BotaoCalculadora texto={'-'} background="#fd9536" onPress={() => this.btn('-')} />
                </View>
                <View style={styles.linha}>
                    <BotaoCalculadora texto={'1'} onPress={() => this.btn('1')} />
                    <BotaoCalculadora texto={'2'} onPress={() => this.btn('2')} />
                    <BotaoCalculadora texto={'3'} onPress={() => this.btn('3')} />
                    <BotaoCalculadora texto={'+'} background="#fd9536" onPress={() => this.btn('+')} />
                </View>
                <View style={styles.linha}>
                    <BotaoCalculadora flex={2} texto={'0'} onPress={() => this.btn('0')} />
                    <BotaoCalculadora texto={'.'} onPress={() => this.btn('.')} />
                    <BotaoCalculadora texto={'='} background="#fd9536" onPress={() => this.btn('=')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1
    },
    linha: {
        flex:1,
        flexDirection:'row'
    },
    result: {
        backgroundColor:'#000000',
        color:'#ffffff',
        fontSize:60,
        flex:1,
        textAlign:'right'
    }
});