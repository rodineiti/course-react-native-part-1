import React, { Component } from 'react';
import {Slider, View, StyleSheet,Text} from 'react-native';

export default class SliderDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            r: 100,
            g: 100,
            b: 100
        };        
    }

    render() {

       const styles = StyleSheet.create({
            body: {
                backgroundColor:`rgb(${this.state.r},${this.state.g},${this.state.b})`,
                flex:1
            }
       });

       return (
            <View style={styles.body}>
                <Text>RED</Text>
                <Slider value={this.state.r} 
                    minimumValue={0} 
                    maximumValue={255}
                    onValueChange={(v) => this.setState({r:v})}
                    minimumTrackTintColor="red" />                
                <Text>GREEN</Text>
                <Slider value={this.state.g} 
                    minimumValue={0} 
                    maximumValue={255}
                    onValueChange={(v) => this.setState({g:v})}
                    minimumTrackTintColor="green" />                
                <Text>BLUE</Text>
                <Slider value={this.state.b} 
                    minimumValue={0} 
                    maximumValue={255}
                    onValueChange={(v) => this.setState({b:v})}
                    minimumTrackTintColor="blue" />                
            </View>
        );
    }
}