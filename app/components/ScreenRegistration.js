import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView,TouchableHighlight,} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class ScreenRegistration extends React.Component {
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         UserName: '',
         UserEmail: '',
         UserPassword: ''
    
       }
    
     }
     UserRegistrationFunction = () =>{
      
      
      const { UserName }  = this.state ;
      const { UserEmail }  = this.state ;
      const { UserPassword }  = this.state ;
      
      
      
     fetch('http://vucko.x3.rs/dev-sajt/kvisko/registracija.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
      
         name: UserName,
      
         email: UserEmail,
      
         password: UserPassword
      
       })
      
     }).then((response) => response.json())
           .then((responseJson) => {
      
     // Showing response message coming from server after inserting records.
             alert(responseJson);
      
           }).catch((error) => {
             console.error(error);
           });
      
      
       }
       RegProba  = () =>{
       }
  
    render() {
      var {params} = this.props.navigation.state;
      
        return (
          <KeyboardAvoidingView style={styles.MainContainer} behavior="padding">
       
    
            <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>Региструј се!</Text>
      
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Пуно име"
              onChangeText={UserName => this.setState({UserName})}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="E-mail"
              onChangeText={UserEmail => this.setState({UserEmail})}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Лозинка"
              onChangeText={UserPassword => this.setState({UserPassword})}
             // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
            />
     
            <Button title="Регистрација" onPress={this.UserRegistrationFunction} color="#2196F3" />
          
      
     
  
    </KeyboardAvoidingView>
                
        );
      }
    }
          
      




    const styles = StyleSheet.create({
      
     MainContainer :{
      
     justifyContent: 'center',
     flex:1,
     margin: 30,
     },
      
      
     TextInputStyleClass: {
      
     textAlign: 'center',
     marginBottom: 7,
     height: 40,
     borderWidth: 1,
     // Set border Hex Color Code Here.
     borderColor: '#2196F3',
     
      // Set border Radius.
     borderRadius: 5 ,
      
     // Set border Radius.
      //borderRadius: 10 ,
     }
      
     });

