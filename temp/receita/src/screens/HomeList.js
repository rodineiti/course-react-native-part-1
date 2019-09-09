import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableHighlight } from 'react-native'

export default class HomeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    key: '1',
                    title: 'Prato executivo',
                    img:require('./../../assets/images/tipos/pe.png'),
                    description: 'Pratos prontos',
                    bg: '#e35339',
                    products: [
                        {
                            key: '1',
                            name: 'Prato de frango',
                            img:require('./../../assets/images/cardapio/pe/executivos_frang_.png')
                        },
                        {
                            key: '2',
                            name: 'Prato de peixe',
                            img:require('./../../assets/images/cardapio/pe/executivos_peix_.png')
                        },
                        {
                            key: '3',
                            name: 'Prato de picanha',
                            img:require('./../../assets/images/cardapio/pe/executivos_picanh_.png')
                        }
                    ]
                },
                {
                    key: '2',
                    title: 'Saladas',
                    img:require('./../../assets/images/tipos/saladas.png'),
                    description: 'Saldas prontas',
                    bg: '#a6bb24',
                    products: [
                        {
                            key: '1',
                            name: 'Salada de frango',
                            img:require('./../../assets/images/cardapio/saladas/salada-fr.png')
                        },
                        {
                            key: '2',
                            name: 'Sala de agua doce',
                            img:require('./../../assets/images/cardapio/saladas/salada_aguadoc_.png')
                        },
                        {
                            key: '3',
                            name: 'Salada de salmão',
                            img:require('./../../assets/images/cardapio/saladas/salada_salma.png')
                        }
                    ]
                },
                {
                    key: '3',
                    title: 'Bebidas',
                    img:require('./../../assets/images/tipos/bebidas.png'),
                    description: 'Bebidas',
                    bg: '#079ed4',
                    products: [
                        {
                            key: '1',
                            name: 'Caipirinha',
                            img:require('./../../assets/images/cardapio/bebidas/capirosc_3.png')
                        },
                        {
                            key: '2',
                            name: 'Cookies',
                            img:require('./../../assets/images/cardapio/bebidas/cookies_crea.png')
                        },
                        {
                            key: '3',
                            name: 'Morango',
                            img:require('./../../assets/images/cardapio/bebidas/morango_gd.png')
                        },
                        {
                            key: '4',
                            name: 'Prata',
                            img:require('./../../assets/images/cardapio/bebidas/patra.png')
                        },
                        {
                            key: '5',
                            name: 'Suco Fitness',
                            img:require('./../../assets/images/cardapio/bebidas/suco_fitines_gd.png')
                        }
                    ]
                },
                {
                    key: '4',
                    title: 'Sobremesas',
                    img:require('./../../assets/images/tipos/sobremesa.png'),
                    description: 'Sobremesas',
                    bg: '#fcb81c',
                    products: [
                        {
                            key: '1',
                            name: 'Brownie',
                            img:require('./../../assets/images/cardapio/sobremesas/brownie_gd.png')
                        },
                        {
                            key: '2',
                            name: 'Creme papaya cassis',
                            img:require('./../../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')
                        },
                        {
                            key: '3',
                            name: 'Delicia gelada',
                            img:require('./../../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')
                        }
                    ]
                }
            ]
        };
    }

    static navigationOptions = {
        title: 'Restaurante X',
        tabBarLabel: 'Home',
        tabBarIcon:({focused, tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('./../../assets/images/home_azul.png')} style={styles.icone} />
                )
            } else {
                return (
                    <Image source={require('./../../assets/images/home_preto.png')} style={styles.icone} />
                )
            }
        }
    }
    render() {
        return (
            <View>
                <FlatList 
					data={this.state.list} 
					renderItem={({item}) => <ListItem data={item} navigation={this.props.navigation} />} />
            </View>
        )
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click () {
        this.props.navigation.navigate('HomeProducts', {title: this.props.data.title, products:this.props.data.products})
    }

    render() {
        return (
            <TouchableHighlight onPress={this.click} underlayColor="#CCCCCC">
                <View style={[styles.item, {backgroundColor:this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.img} />
                    <View>
                        <Text style={styles.title}>{this.props.data.title}</Text>
                        <Text style={styles.description}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    icone: {
        width:26,
        height:26
    },
    item: {
        height:100,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    img: {
        width:64,
        height:64,
        marginLeft:20,
        marginRight:20
    },
    title: {
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold'
    },
    description: {
        color:'#ffffff',
        fontSize:16,
    }
});
