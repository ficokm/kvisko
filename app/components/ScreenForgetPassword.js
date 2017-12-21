import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableHighlight,KeyboardAvoidingView } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class HomeScreen extends React.Component {
    ZabLozinka1 = () =>{
        var {navigate} = this.props.navigation;
        navigate("First")
       
      }

    static navigationOptions =
    {
       title: 'Заборављена лозинка?',
    }
  
    render() {
   
        return (
    <KeyboardAvoidingView style={styles.MainContainer} behavior="padding">
       
        <Text>Унесите вашу e-mail адресу:</Text>
            <TextInput
            // Adding hint in Text Input using Place holder.
              placeholder="E-mail "
              onChangeText={UserPassword => this.setState({UserPassword})}
            // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              
          />
        <View style={styles.tema}>
          <TouchableHighlight
                style={styles.submit}
                
                underlayColor='#fff'>
                <Text style={styles.submitText}>Пошаљи</Text>
          </TouchableHighlight>

          <TouchableHighlight
                style={styles.submit}
                onPress={this.ZabLozinka1}
                underlayColor='#fff'>
                <Text style={styles.submitText}>Назад</Text>
          </TouchableHighlight>
          </View> 
        
        </KeyboardAvoidingView>

        
          
        );
      }
    }

    




    const styles = StyleSheet.create({
        
       MainContainer :{
        
       justifyContent: 'center',
       flex:1,
       margin: 20,
       },
        
       TextInputStyleClass: {
        
       textAlign: 'center',
       marginBottom: 7,
       height: 40,
       borderWidth: 1,
       // Set border Hex Color Code Here.
        borderColor: '#2196F3',
        
        // Set border Radius.
        borderRadius: 5 
       
    },
    submit:{
        width: 100,
        height:35,
        marginTop:2,
        marginRight:25,
    

    },
    submitText:{
        paddingTop:5,
        paddingBottom:5,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    tema:{
        
        marginTop: 10,
        flexDirection:'row',
        
      },
    
    
   });