import React, { Component } from 'react';
import {StatusBar, View, StyleSheet,Text, Button} from 'react-native';

export default class StatusBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusStyle: 'dark-content',
            bgColor: '#ffffff'
        };
        this.styles = StyleSheet.create({
            body: {
                backgroundColor:`#cccccc`,
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            },
       });
       this.alternar = this.alternar.bind(this);
    }

    alternar() {
        let s = this.state;
        if (s.statusStyle == 'dark-content') {
            s.statusStyle = 'light-content';
            s.bgColor = '#000000'
        } else {
            s.statusStyle = 'dark-content';
            s.bgColor = '#ffffff'
        }
        this.setState(s);
    }

    render() {
       return (
            <View style={[this.styles.body, {backgroundColor:this.state.bgColor}]}>
                <StatusBar barStyle={this.state.statusStyle} />
                <Button title="Alternar" onPress={this.alternar} />
            </View>
        );
    }
}
