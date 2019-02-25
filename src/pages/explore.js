import React, {Component} from 'react';
import {Text, View,
    SafeAreaView, 
    Platform,
    StatusBar,
    ScrollView,
    Dimensions,
    Image,
TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../component/explore/category';
import Home from '../component/explore/home';

const {height, width} = Dimensions.get('window')
export default class Explore extends Component{

    componentWillMount(){
        StatusBar.setBackgroundColor("#fff"); // so android
        StatusBar.setBarStyle("dark-content");  // fonte 
        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100+StatusBar.currentHeight;
        }
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
                <View style={{flex: 1}}>
                    <View style={{
                        height: 80,
                        backgroundColor:'#fff',
                        borderBottomWidth:1, borderBottomColor:'#ddd'
                    }}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            paddingHorizontal: 10,
                            backgroundColor:'#fff', 
                            marginHorizontal:20,
                            marginVertical:20,
                            shadowOffset:{width: 0, height: 0},
                            shadowColor:'#000',
                            shadowOpacity: 0.2,
                            borderWidth: 1,
                            borderColor:'#ddd',
                            elevation:1,
                            //marginTop: Platform.OS == 'android'? 30:null,
                        }}>
                            <Icon name='ios-search' size={20} style={{
                                marginRight:10,
                            }} />
                            <TextInput 
                                underlineColorAndroid='transparent'
                                placeholder='Try New Delhi'
                                placeholderTextColor='grey'
                                
                                style={{
                                    flex:1,
                                    fontWeight: '700',
                                    backgroundColor:'#fff',
                                    marginBottom:0,
                                    color:'grey'
                                    //height:10,
                                }}
                            />
                        </View>
                    </View>

                    <ScrollView scrollEventThrottle={16}>
                        <View style={{
                            flex:1, backgroundColor:'#fff',
                            paddingTop:20
                        }}>
                            <Text style={{
                                fontSize:24, fontWeight:'700',
                                paddingHorizontal: 20, color:'#000'
                            }}>What can we help you find, Varun?</Text>
                            <View style={{height:130, marginTop:20}}>
                                <ScrollView
                                   horizontal={true}
                                   showsHorizontalScrollIndicator={false} >
                                    <Category imageUri={require(
                                        '../assets/home.jpg'
                                    )}
                                     name={"Home"}/>
                                    <Category imageUri={require(
                                        '../assets/exp.jpg'
                                    )}
                                     name={"Experiences"}/>
                                     <Category imageUri={require(
                                        '../assets/restaurant.jpg'
                                    )}
                                     name={"Restaurant"}/>
                                     
                                </ScrollView>
                            </View>

                            <View style={{marginTop:40, paddingHorizontal: 20}}>
                                    <Text style={{fontSize:24, fontWeight:'700'}}>
                                        Introducing Airbnb Plus
                                    </Text>
                                    <Text style={{
                                        fontWeight:'100', marginTop:10
                                    }}>
                                        A new selection of homes verified for quality & comfort
                                    </Text>
                                    <View style={{
                                        width:width-40, height:200,
                                        marginTop:20, 
                                    }}>
                                        <Image source={require(
                                            '../assets/home.jpg'
                                        )}
                                        style={{
                                            flex:1,
                                            height:null,
                                            width:null,
                                            resizeMode:'cover',
                                            borderRadius: 5, borderWidth: 1,
                                            borderColor:'#ddd'
                                        }}/>
                                    </View>
                            </View>
                            
                        </View>

                        <View style={{
                            marginTop:40,
                        }}>
                            <Text style={{
                                fontSize:24, fontWeight:'700', 
                                paddingHorizontal:20,
                            }}>Homes around the world</Text>
                            <View style={{
                                paddingHorizontal:20,marginTop:20, 
                                flexDirection:'row', flexWrap: 'wrap',
                                justifyContent:'space-between'
                            }}>
                                <Home width={width} type={'PRIVATE ROOM - 2 BEDS'} name={'The Cozy Place'} price={82} rating={4}/>
                                <Home width={width} type={'PRIVATE ROOM - 3 BEDS'} name={'The Cozy Place'} price={70} rating={4}/>
                                <Home width={width} type={'PRIVATE ROOM - 5 BEDS'} name={'The Cozy Place'} price={85} rating={3}/>
                                <Home width={width} type={'PRIVATE ROOM - 1 BED'} name={'The Cozy Place'} price={40} rating={2}/>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}