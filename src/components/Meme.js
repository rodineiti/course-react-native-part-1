import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';

export default class Meme extends Component {

    constructor(props) {
      super(props);
      this.state = {
        texto1: '', texto2:''
      };
      this.change = this.change.bind(this);
    }
  
    change(t) {
      let s = this.state;
      s.texto1 = t;
      s.texto2 = this.mudarVogais(t);
      this.setState(s);
    }
  
    mudarVogais(texto) {
      let temp = texto.toLowerCase();
      temp = temp.replace(/(a|e|i|o|u)/g, 'i');
      temp = temp.replace(/(á|à|ã|â)/g, 'i');
      temp = temp.replace(/(é|è|ê)/g, 'i');
      temp = temp.replace(/(í|ì|î)/g, 'i');
      temp = temp.replace(/(ó|ò|ô|õ)/g, 'i');
      temp = temp.replace(/(ú|ù|û)/g, 'i');
      return temp;
    }
  
    render() {
      return (
        <View style={{flex:1}}>
          <View>
            <Text style={styles.titulo}>Criado de Memes</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput style={styles.input} placeholder="Digite o texto" onChangeText={this.change} />
          </View>
          <View style={styles.area}>
            <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
            <Image style={styles.imagem} source={require("./images/images.jpg")} />
            <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    titulo: {
      fontSize:30,
      color:"#ffffff"
    },
    inputArea: {
      alignSelf:"stretch"
    },
    input: {
      borderWidth:1,
      borderColor: "#999999",
      backgroundColor: "#EEEEEE",
      color:"#000000",
      height:40,
      margin:20,
      padding:10
    },
    area: {
      width:300,
      height:300,
    },
    imagem: {
      width:300,
      height:290,
      marginTop:-70,
      zIndex:0
    },
    texto: {
      fontSize:25,
      color:"#FFFFFF",
      padding:10,
      backgroundColor:"transparent",
      fontWeight:"bold",
      textAlign:"center",
      height:80
    },
    texto1: {
      zIndex:1
    },
    texto2: {
      zIndex:1,
      marginTop:-70,
    }
  });