import React, { Component } from 'react';
import {SectionList, View, StyleSheet, Text} from 'react-native';

export default class SectionListDemo extends Component {
    constructor(props) {
        super(props);
        this.styles = StyleSheet.create({
            body: {
                
            },
            flatItem: {
                padding:10,
                borderWidth:1
            },
            flatList: {
                backgroundColor:'#FF0000'
            },
            flatName: {
                fontSize:18,
                height:40,
            },
            flatAge: {
                fontSize:15,
            }
        });
        this.state = {
            data: [
              {
                  title:'B', data: [
                      {key:'1',name:'Bolo'}
                  ]
              },
              {
                title:'C', data: [
                    {key:'2',name:'Casa'},
                    {key:'3',name:'Ciclano'}
                ]
              },
              {
                title:'D', data: [
                    {key:'4',name:'Dado'},
                    {key:'5',name:'Dia'}
                ]
              }
            ]
        }
    }

    flatRender(item) {
        return (
            <View style={this.styles.flatItem}>
                <Text style={this.styles.flatName}>{item.name}</Text>
            </View>
        );
    }

    renderSection(section) {
        return (
            <View style={this.styles.flatItem}>
                <Text style={this.styles.flatName}>Letra: {section.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={this.styles.body}>
                <SectionList style={this.styles.flatList}
                    sections={this.state.data}
                    renderItem={({item}) => this.flatRender(item)}
                    renderSectionHeader={({section}) => this.renderSection(section)}
                    />
            </View>
        );
    }
}