import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Imbox extends Component{
    render(){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                flex:1,
            }}>
                <Text>Imbox</Text>
            </View>
        );
    }
}