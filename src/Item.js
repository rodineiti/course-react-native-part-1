import React, { Component } from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native'

export default class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} underlayColor="#CCCCCC">
                <View style={styles.item}>
                    <Image source={{uri:this.props.data.image}} style={styles.img} />
                    <View style={styles.info}>
                        <Text style={{fontSize:14,fontWeight:'bold'}}>{this.props.data.nome}</Text>
                        <Text style={{color:'#999999'}}>{this.props.data.rendimento} porçoes - {this.props.data.preparo} minutos</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection:'row',
        height:80,
        borderBottomWidth:1,
        borderColor:'#CCCCCC',        
    },
    img: {
        width:100,
        height:70,
        marginTop:5,
        marginLeft:10
    },
    info: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10
    }
});