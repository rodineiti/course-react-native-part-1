import React, { Component } from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';

export default class PlatformModuleDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                backgroundColor:`#cccccc`,
            }
       });
    }

    render() {
       return (
            <View style={[this.styles.body]}>
                <Text>Sistema: {Platform.OS}</Text>
                <Text>Versão: {Platform.Version}</Text>
            </View>
        );
    }
}
