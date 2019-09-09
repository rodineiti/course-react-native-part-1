import React, { Component } from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';

export default class ScrollViewDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                flex:1,
            },
            quadrado1: {
                backgroundColor:'#FF0000',
                height:200
            },
            quadrado2: {
                backgroundColor:'#00FF00',
                height:300
            },
            header: {
                backgroundColor:'#0000FF',
                height:100
            }
        });
    }

    render() {
        return (
            <View style={this.styles.body}>
                <View style={this.styles.header}>
                    <Text>Header</Text>
                </View>
                <ScrollView>
                    <View style={this.styles.quadrado1}></View>
                    <View style={this.styles.quadrado2}></View>
                    <View style={this.styles.quadrado1}></View>
                    <View style={this.styles.quadrado2}></View>
                    <View style={this.styles.quadrado1}></View>
                    <View style={this.styles.quadrado2}></View>
                    <View style={this.styles.quadrado1}></View>
                    <View style={this.styles.quadrado2}></View>
                </ScrollView>
                <View style={this.styles.header}>
                    <Text>Footer</Text>
                </View>
            </View>
        );
    }
}