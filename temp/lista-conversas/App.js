import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native'
import ListItem from './src/ListItem';

export default class Conversas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chat: [
				{ key: '1', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Rodinei de Jesus', msg: 'Hello Rodinei, Hello Rodinei, Hello Rodinei, Hello Rodinei, Hello Rodinei, Hello Rodinei' },
				{ key: '2', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Fulano', msg: 'Hello' },
				{ key: '3', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Ciclano', msg: 'Rodinei' },
				{ key: '4', img: 'https://www.b7web.com.br/avatar2.png', nome: 'Bertrano', msg: 'OI' },
				{ key: '5', img: 'https://www.b7web.com.br/avatar3.png', nome: 'Usuário 2', msg: 'Bye' },
				{ key: '6', img: 'https://www.b7web.com.br/avatar1.png', nome: 'Usuário 3', msg: 'Ok' },
			]
		};
	}
    render() {
        return (
            <View style={styles.container}>
				<FlatList 
					data={this.state.chat} 
					renderItem={({item}) => <ListItem data={item} />} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 20
	}
});