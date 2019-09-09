import React, { Component } from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';

export default class FlatListDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                
            },
            flatItem: {
                padding:10,
                borderWidth:1
            },
            flatList: {
                backgroundColor:'#FF0000'
            },
            flatName: {
                fontSize:18,
                height:40,
            },
            flatAge: {
                fontSize:15,
            }
        });
        this.state = {
            data: [
              {key: '1', name: 'Rodinei de Jesus', age: 36},
              {key: '2', name: 'Fulano de tal', age: 40},
              {key: '3', name: 'Ciclano', age: 18},
              {key: '4', name: 'Teste', age: 25},
              {key: '5', name: 'Hello world', age: 100}
            ]
          }
    }

    flatRender(item) {
        return (
            <View style={this.styles.flatItem}>
                <Text style={this.styles.flatName}>{item.name}</Text>
                <Text style={this.styles.flatAge}>{item.age} anos</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={this.styles.body}>
                <FlatList style={this.styles.flatList}
                    data={this.state.data}
                    renderItem={({item}) => this.flatRender(item)}
                    />
            </View>
        );
    }
}