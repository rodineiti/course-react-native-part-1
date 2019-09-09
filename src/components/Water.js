import React, { Component } from 'react';
import {View, StyleSheet, ImageBackground, Text, Button} from 'react-native';

export default class Water extends Component {

    constructor(props) {
      super(props);
      this.state = {
          meta: 2000,
          consumido: 0,
          status: 'Ruim',
          pct: '0'
      }
      this.beber = this.beber.bind(this);
      this.atualizar = this.atualizar.bind(this);
    }

    atualizar() {
        let s = this.state;
        s.pct = Math.floor(((s.consumido / s.meta)*100));
        if (s.pct >= 100) {
            s.status = 'Bom';
        } else {
            s.status = 'Ruim';
        }
        this.setState(s);
    }

    beber() {
        let s = this.state;
        s.consumido += 200;
        this.setState(s);
        this.atualizar();
    }
  
    render() {
      return (
        <View style={{flex:1}}>
          <ImageBackground source={require("./images/waterbg.png")} style={styles.bgImage}>
            <View>
                <View style={styles.infoArea}>
                <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Meta</Text>
                    <Text style={styles.areaDado}>{this.state.meta}</Text>
                </View>              
                <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Consumo</Text>
                    <Text style={styles.areaDado}>{this.state.consumido}</Text>
                </View>              
                <View style={styles.area}>
                    <Text style={styles.areaTitulo}>Status</Text>
                    <Text style={styles.areaDado}>{this.state.status}</Text>
                </View>
                </View>
                <View style={styles.pctArea}>
                <Text style={styles.pctText}>{this.state.pct}%</Text>
                </View>
                <View style={styles.btnArea}>
                <Button title="Beber 200ml" onPress={this.beber} />
                </View>
            </View>
          </ImageBackground>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    bgImage: {
        flex:1,
        width:null
      },
      infoArea: {
        flex:1,
        flexDirection:"row"
      },
      area: {
        flex:1,
        alignItems:"center",
        marginTop:50
      },
      areaTitulo: {
        color:"#45b2fc"
      },
      areaDado: {
        color:"#2b4274",
        fontSize:15,
        fontWeight:"bold",
        marginTop:10
      },
      pctArea: {
        marginTop:200,
        alignItems:"center"
      },
      pctText: {
        fontSize:80,
        color:"#FFFFFF",
        backgroundColor:"transparent"
      },
      btnArea: {
        marginTop:30,
        alignItems:"center",
      }
  });