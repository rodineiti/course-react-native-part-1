import React, { Component } from 'react';
import {View, StyleSheet,TextInput, AsyncStorage} from 'react-native';

export default class AsyncStorageDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: ''
        };

        AsyncStorage.getItem("nome")
            .then((v) => {
                this.setState({nome:v})
            });

        this.styles = StyleSheet.create({
            body: {
                backgroundColor:`#cccccc`,
            },
            input: {
                height:40,
                width:200,
                borderWidth:1,
                borderColor:'#cccccc',
                padding:10,
                fontSize:16,
            }
       });
       this.setNome = this.setNome.bind(this);
    }

    setNome(v) {
        let s = this.state;
        s.nome = v;
        this.setState(s);
        AsyncStorage.setItem("nome", v);
    }

    render() {
       return (
            <View style={[this.styles.body]}>
                <TextInput value={this.state.nome} style={this.styles.input} onChangeText={(v) => this.setNome(v)} />
            </View>
        );
    }
}
