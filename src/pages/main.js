import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Explore from './explore';
import Save from './save';
import Trips from './trips';
import Imbox from './imbox';
import Profile from './profile';

const Tabs = createMaterialTopTabNavigator(
  {
    Explore:{
      screen: Explore,
      navigationOptions:{
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon name='search' size={24} color={tintColor} />
        )
      }
    },
    Save:{
      screen: Save,
      navigationOptions:{
        tabBarLabel: 'Save',
        tabBarIcon: ({tintColor}) => (
          <Icon name='heart-o' size={24} color={tintColor} />
        )
      }
    },
    Trips:{
      screen: Trips,
      navigationOptions:{
        tabBarLabel: 'Trips',
        tabBarIcon: ({tintColor}) => (
          <Icon name='angellist' size={24} color={tintColor} />
        )
      }
    },
    Imbox:{
      screen: Imbox,
      navigationOptions:{
        tabBarLabel: 'Imbox',
        tabBarIcon: ({tintColor}) => (
          <Icon name='comment-o' size={24} color={tintColor} />
        )
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions:{
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon name='user-o' size={24} color={tintColor} />
        )
      }
    },
  },
  {
    fontSize:5,
    swipeEnable:'true',
    tabBarPosition:'bottom',
    tabBarOptions: {
      showIcon:true,
      showLabel:true,
      activeTintColor:'red',
      inactiveTintColor: 'grey',
      style:  {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        //borderTopColor:'#000',
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        
      },
      indicatorStyle:{
        backgroundColor:'#fff'
      },
      labelStyle: {
        fontSize:9,
      }
    }
  }
);

Tabs.navigationOptions = () => ({
  header:null,
});

export default Tabs;