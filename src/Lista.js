import React, { Component } from 'react';
import { View, FlatList } from 'react-native'
import Item from './Item';

export default class Lista extends Component {

    static navigationOptions ={
        title: 'App de Receitas'
    }
    constructor(props) {
        super(props);
        this.state = {
        list: [
            {
                key: '1',
                nome: 'ARROZ DE FORNO VEGETARIANO',
                por: 'Fulano de tal',
                descricao: 'Em uma panela fritar a cebola na margarina, acrescentar o molho e a salsinha, após 2 minutos acrescentar os outros ingredientes, deixar por 10 minutos.',
                rendimento:50,
                preparo:60,
                image: 'https://img.itdg.com.br/tdg/images/recipes/000/006/014/183833/183833_original.jpg?mode=crop&width=710&height=400',
                ingredientes: [
                    { key:'1', txt: '3 xícaras de arroz' },
                    { key:'2', txt: '350 g de mussarela' },
                    { key:'3', txt: '1 colher de margarina' },
                    { key:'4', txt: '1 xícara de champignon' },
                    { key:'5', txt: '1 lata de ervilha' },
                    { key:'6', txt: '1 cebola picada' },
                    { key:'7', txt: '1 xícara de azeitonas verdes picadas e sem caroço' },
                    { key:'8', txt: '1/2 xícara de cheiro verde picado (pode ser salsinha)' },
                    { key:'9', txt: '1 lata de molho de tomate' },
                    { key:'10', txt: 'Sal e pimenta a gosto' }
                ],
                modo: [
                    { key:'1', txt: 'Cozinhar o arroz e reservar.' },
                    { key:'2', txt: 'Em uma panela fritar a cebola na margarina, acrescentar o molho e a salsinha, após 2 minutos acrescentar os outros ingredientes, deixar por 10 minutos.' },
                    { key:'3', txt: 'Em uma travessa de vidro grande colocar primeiro uma camada fina de arroz, cerca de 1 dedo e meio de altura, colocar sobre o arroz o molho já pronto (cerca de 1 concha e meia de feijão) e sobre o molho o queijo que deverá cubrir o arroz e o molho.' },
                    { key:'4', txt: 'Repetir essa operação até chegar ao topo da travessa, que deverá ser acrescentada mais uma camada de molho por cima do queijo. Levar ao forno pré-aquecido por cerca de 20 minutos. ' }
                ]
                }
            ]
        }
    }

    click (item) {
        this.props.navigation.navigate('Receita', item);
    }

    render() {
        return (
            <View style={{flex:1,marginTop:20}}>
                <FlatList data={this.state.list}
                    renderItem={({item}) => <Item data={item} onPress={() => this.click(item)} />} />
            </View>
        )
    }
}