import React, { Component } from 'react';
import {Switch, View, StyleSheet, Text} from 'react-native';

export default class SwitchDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                backgroundColor:'#cccccc',
                flex:1
            }
        });
        this.state = {
            status: false
        };
    }

    render() {
       return (
            <View style={this.styles.body}>
                <Switch thumbTintColor="#FF0000" onTintColor="green" value={this.state.status} onValueChange={(status) => this.setState({status:status})} />
                <Text>{this.state.status.toString()}</Text>
            </View>
        );
    }
}