import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class Pitanja extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          pitanje: '',
          nizOpcija: [],
          tacnaOpcija: '',
            }
      }
}