import React, { Component } from 'react';
import {Modal, View, StyleSheet,Text, Button} from 'react-native';

export default class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.styles = StyleSheet.create({
            body: {
                backgroundColor:`#cccccc`,
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            },
            modal: {
                flex:1,
                backgroundColor:'#00FF00',
                paddingTop:40,
                alignItems:'flex-start'
            }
       });
       this.clickModal = this.clickModal.bind(this);
    }

    clickModal(show) {
        let s = this.state;
        s.show = show;
        this.setState(s);
    }

    render() {
       return (
            <View style={this.styles.body}>
                <Modal animationType="fade" visible={this.state.show}>
                    <View style={this.styles.modal}>
                        <Button title="X" onPress={(show) => this.clickModal(false)} />
                        <Text>Testando modal</Text>
                    </View>
                </Modal>
                <Button title="Abrir Modal" onPress={(show) => this.clickModal(true)} />
            </View>
        );
    }
}
