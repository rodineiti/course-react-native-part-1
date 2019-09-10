import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Button } from 'react-native'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: (this.props.data.done == '1') ? styles.done : styles.undone
        };
        this.update = this.update.bind(this);
        this.deletar = this.deletar.bind(this);
    }

    update () {
        let state = this.state;
        let done = 'sim';
        if (state.done == styles.undone) {
            state.done = styles.done;
            done = 'sim';
        } else {
            state.done = styles.undone;
            done = 'nao';
        }

        fetch(`${this.props.url}/${this.props.data.id}`, {
            method: 'PUT', 
            headers: {
               'Accept':'application/json',
               'Content-Type':'application/json'
            },
            body: JSON.stringify({ done:done })
           })
           .then(r => r.json())
           .then().catch((err) => alert(err.message));
        
		this.setState(state);
    }

    deletar () {
        fetch(`${this.props.url}/${this.props.data.id}`, {
            method: 'DELETE', 
            headers: {
               'Accept':'application/json',
               'Content-Type':'application/json'
            }
           })
           .then(r => r.json())
           .then(json => {
                alert('Item excluído com sucesso!');
                this.props.loadFunction();
           }).catch((err) => alert(err.message));
    }

    render() {
        return (
            <View style={styles.area}>
                <TouchableHighlight onPress={this.update} style={[styles.area, this.state.done]}>
                    <View>
                        
                    </View>
                </TouchableHighlight>
                <Text>{this.props.data.item}</Text>
                <Button title="X" style={styles.btn} onPress={this.deletar} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    area: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#CCCCCC',
        paddingTop:10,
        paddingBottom:10,
        flex:1,
        alignItems:'center',
    },
    marcarArea: {
        width:40,
        height:40,
        marginLeft:10,
        marginRight:10
    },
    undone: {
		backgroundColor:'#CCCCCC'
	},
	done: {
		backgroundColor:'#00FF00'
    },
    btn: {
        width:40,
        height:40
    }
});