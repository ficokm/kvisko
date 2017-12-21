import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenLogin from './app/components/ScreenLogin';
import {StackNavigator, } from 'react-navigation';
import ScreenForgetPassword from './app/components/ScreenForgetPassword'
import ScreenRegistration from './app/components/ScreenRegistration';
import HomeScreen from './app/components/HomeScreen';
import KvizPitanja from './app/components/PitanjaProbaScreen'




const Navigation = StackNavigator({
  
    First: {screen: ScreenLogin},
    Second: {screen: HomeScreen},
    Registration: {screen: ScreenRegistration},
    AjdeViseSkociTamo:{screen: ScreenForgetPassword},
    //Pitanja:{screen:KvizPitanja}
});


export default  Navigation;


