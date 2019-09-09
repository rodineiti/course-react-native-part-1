import React, { Component } from 'react';
import { View, StyleSheet, Platform, FlatList, ImageBackground } from 'react-native'
import MsgItem from './src/MsgItem';

export default class Conversas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chat: [
				{ key: '1', nome: 'Rodinei', msg: 'oi', m:true },
				{ key: '2', nome: 'Fulano', msg: 'oi, bem?', m:false },
				{ key: '3', nome: 'Rodinei', msg: 'sim e vc?', m:true },
				{ key: '4', nome: 'Fulano', msg: 'tbm', m:false },
				{ key: '5', nome: 'Rodinei', msg: 'que bom, que legal, legal mesmo aksjdlfhasdjlhfa dfakdsljflkasd fashjdflkahsd asdjhf', m:true },
				{ key: '6', nome: 'Rodinei', msg: 'oi', m:true },
				{ key: '7', nome: 'Fulano', msg: 'oi, bem?', m:false },
				{ key: '8', nome: 'Rodinei', msg: 'sim e vc?', m:true },
				{ key: '9', nome: 'Fulano', msg: 'tbm', m:false },
				{ key: '10', nome: 'Rodinei', msg: 'que bom, que legal, legal mesmo aksjdlfhasdjlhfa dfakdsljflkasd fashjdflkahsd asdjhf', m:true },
			]
		};
	}
    render() {
        return (
            <View style={styles.container}>
				<ImageBackground source={{uri:'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/12/fundo-rosa-background-transparente.png?resize=696%2C348&ssl=1'}}
				style={styles.chat}>
					<FlatList 
					data={this.state.chat} 
					renderItem={({item}) => <MsgItem data={item} />} />
				</ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 20
	},
	chat: {
		flex:1
	}
});