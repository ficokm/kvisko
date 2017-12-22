import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,Keyboard, KeyboardAvoidingView,TouchableHighlight,BackHandler,NetInfo,ToastAndroid, ListView} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { Constants } from 'expo';

export default class ScreenLogin extends React.Component {
 
  static navigationOptions =
  {
    headerLeft: null,
    title: 'Квиско',
    header: null,
  }
  constructor(props) {
      super(props)
         this.state = {
         UserEmail: '',
         UserPassword: ''
      }
     }
     UserLoginFunction = () =>{
      
      const { UserEmail }  = this.state;
      const { UserPassword }  = this.state;
      
      
     fetch('http://vucko.x3.rs/dev-sajt/kvisko/submit_user_info.php', {
            
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
          email: UserEmail,
          password: UserPassword
      })
      
     }).then((response) => response.json())
           .then((responseJson) => {
     
             // If server response message same as Data Matched
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(UserEmail)) {
            if(responseJson === 'Data Matched')
             {
                //Then open Profile activity and send user email to profile activity.
                 this.props.navigation.navigate('Second', { Email: UserEmail });
                 Keyboard.dismiss();
                 this._textInput.setNativeProps({text: ''});
                 this._textInput1.setNativeProps({text: ''});
              }
             else{
             alert(responseJson);
             }}else{
               alert('Moras mejl da uneses, ne random slova')
             }
              }
                ).catch((error) => {
             console.error(error);
           });
      }
     
  KlikBack = () =>{
        BackHandler.exitApp();
      }
      
  ProbaReg = () =>{
    Keyboard.dismiss();
    var {navigate} = this.props.navigation;
    navigate("Registration")
  }
  
  ZabLozinka = () =>{
    Keyboard.dismiss();
    var {navigate} = this.props.navigation;
    navigate("AjdeViseSkociTamo")
   
  }
 
  


  
 
  render() {
    var {navigate} = this.props.navigation;
    return (
        <KeyboardAvoidingView style={styles.MainContainer} behavior="padding">
        <Text style= {styles.TextComponentStyle}>Пријави се!</Text>
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="E-mail"
              onChangeText={UserEmail => this.setState({UserEmail})}
              maxLength = {30}
              ref={component => this._textInput1 = component}
              // Making the Under line Transparent.
               underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              blurOnSubmit={true}
              />
   
          <TextInput
            // Adding hint in Text Input using Place holder.
              placeholder="Лозинка "
              onChangeText={UserPassword => this.setState({UserPassword})}
             // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              ref={component => this._textInput = component}
              secureTextEntry={true}
              blurOnSubmit={true}
              maxLength = {20}
              
          />
          <View>
             <Text style={styles.zablog}  onPress={this.ZabLozinka}>Заборавили сте лозинку?</Text>
          </View>
         
          <View style={styles.tema}>
          <TouchableHighlight
                style={styles.submit}
                onPress={this.UserLoginFunction}
                underlayColor='#fff'>
                <Text style={styles.submitText}>
                        Пријави се
                </Text>
          </TouchableHighlight>

          <TouchableHighlight
                style={styles.submit}
                onPress={this.KlikBack}
                underlayColor='#fff'>
                <Text style={styles.submitText}>Назад</Text>
          </TouchableHighlight>
        </View>
          <View style={styles.tema}>
                <Text >Нисте регистровани?</Text>
                <Text style={styles.zablog}  onPress={this.ProbaReg}> Региструјте се!</Text>
        </View> 
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
  borderRadius: 5 
 },
 TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: 'center', 
    marginBottom: 15
  },

  textRe:{
    marginTop: 7,
    marginLeft: 125,
   },

  tema:{
    
    marginTop: 10,
    flexDirection:'row',
    
  },
  regtext:{
    marginLeft: 20,
  },
  zablog:{
    color: '#3366BB'  
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
statusBar: {
  backgroundColor: "#C2185B",
  height: Constants.statusBarHeight,
},
});