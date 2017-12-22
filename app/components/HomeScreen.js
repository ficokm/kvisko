import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Playquiz from './Playquiz'

export default class HomeScreen extends React.Component {
  static navigationOptions =
  {
    headerLeft: null,
    
     header: null,
  }
  
    render() {
      var {params} = this.props.navigation.state;
        return (
         
         
            <Playquiz/>
          
          
        );
      }
    }
