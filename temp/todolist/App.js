import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TextInput, Button} from 'react-native'
import TodoItem from './src/components/TodoItem';

export default class TodoList extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			input: '',
		};

		this.url = 'https://b7web.com.br/todo/29161';
		this.add = this.add.bind(this);
		this.loadList = this.loadList.bind(this);
		this.loadList();
	}

	loadList() {
		fetch(`${this.url}`)
			.then(r => r.json())
			.then(json => {
				let state =  this.state;
				state.list = json.todo;
				this.setState(state);
			}).catch((err) => alert(err.message));
	}

	add () {
		let input = this.state.input;
		let state = this.state;
		state.input = '';
		this.setState(state);

		fetch(`${this.url}`, {
			 method: 'POST', 
			 headers: {
				'Accept':'application/json',
				'Content-Type':'application/json'
			 },
			 body: JSON.stringify({ item:input })
			})
			.then(r => r.json())
			.then((json) => {
				alert('Tarefa adicionada');
				this.loadList();
			}).catch((err) => alert(err.message));	
	}
	
    render() {
        return (
            <View style={styles.container}>
				<View style={styles.area}>
					<Text>Adicionar tarefa</Text>
					<TextInput style={styles.input} 
						onChangeText={(input) => {
							let state = this.state;
							state.input = input;
							this.setState(state);
						}}
						value={this.state.input} />
					<Button title="Adicionar" onPress={this.add} />
				</View>
				<FlatList 
				data={this.state.list} 
				renderItem={({item}) => <TodoItem data={item} url={this.url} loadFunction={this.loadList} />}
				keyExtractor={(item, index) => item.id} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 20
	},
	area: {
		marginBottom:20,
		backgroundColor:'#dddddd',
	},
	add: {
		fontSize:14,
		textAlign:'center',
		marginBottom:10,
		marginTop:10,
	},
	input: {
		height:40,
		backgroundColor:'#CCCCCC',
		marginLeft:20,
		marginRight:20,
		paddingLeft:10,
		paddingRight:10,
		marginBottom:10
	}
});