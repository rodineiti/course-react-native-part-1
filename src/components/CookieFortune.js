import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Botao from './Botao';

export default class CookieFortune extends Component {

    constructor(props) {
      super(props);
      this.state = {texto:'Frase do dia...'};
      this.frases = [
          'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
          'Imagine uma nova história para sua vida e acredite nela.',
          'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
          'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
          'Não existe um caminho para a felicidade. A felicidade é o caminho.',
          'Não espere por uma crise para descobrir o que é importante em sua vida.',
          'Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás.',
          'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.',
      ];
      this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    }

    quebrarBiscoito() {
        let s = this.state;
        let r = Math.floor(Math.random() * this.frases.length);
        s.texto = this.frases[r];
        this.setState(s);
    }
  
    render() {
      return (
        <View style={styles.body}>
          <Image source={require('./images/Biscoito_Sorte2.png')} />
          <Text style={styles.texto}>"{this.state.texto}"</Text>
          <Botao color="#B59619" texto="Quebrar Biscoito" onPress={this.quebrarBiscoito}  />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    body: {flex:1, justifyContent:'center',alignItems:'center'},
    texto: { fontSize:17, color:'#B59619', margin:30,fontStyle:'italic',textAlign:'center'}
});