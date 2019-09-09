import React, { Component } from 'react';
import {Picker, View, StyleSheet, Text} from 'react-native';

export default class PickerDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                backgroundColor:'#cccccc',
                flex:1
            },
            logo: {
                fontSize:30,
                textAlign:'center',
                marginBottom:20
            },
            texto: {
                fontSize:26,
                textAlign:'center',
                marginTop:20
            }
        });
        this.state = {
            servico:0,
            servicos: [
                {
                    nome: 'Item 1', valor: 30
                },
                {
                    nome: 'Item 2', valor: 40
                },
                {
                    nome: 'Item 3', valor: 60
                },
                {
                    nome: 'Item 4', valor: 80
                },
                {
                    nome: 'Item 5', valor: 90
                }
            ]
          }
    }

    render() {
        let items = this.state.servicos.map((item, index) => {
            return <Picker.Item key={index} value={index} label={item.nome} />
        });

        return (
            <View style={this.styles.body}>
                <Text style={this.styles.logo}>Auto Peças</Text>
                <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({servico: itemValue})}>
                    {items}
                </Picker>
                <Text style={this.styles.texto}>R$ {this.state.servicos[this.state.servico].valor}</Text>
            </View>
        );
    }
}