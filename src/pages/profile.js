import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Profile extends Component{
    render(){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                flex:1,
            }}>
                <Text>Profile</Text>
            </View>
        );
    }
}