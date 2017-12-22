import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView,TouchableHighlight,ToastAndroid,Keyboard, Picker} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


export default class ScreenRegistration extends React.Component {
  static navigationOptions =
  {
    headerLeft: null,
     title: 'Квиско',
     header: null,
  }
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         UserName: '',
         UserEmail: '',
         UserPassword: ''
    
       }
    
     }
     ProbaResetPW = () =>{
      const { UserEmail }  = this.state;
  
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(re.test(UserEmail)) {
  
  
           
         }else{
           alert('Унос мора бити у формату маила')
         }
     
     
    }
    KlikBack = () =>{
      this.props.navigation.navigate('First')
      Keyboard.dismiss();
    }
     UserRegistrationFunction = () =>{
      
      
      const { UserName }  = this.state ;
      const { UserEmail }  = this.state ;
      const { UserPassword }  = this.state ;
      const provera =UserPassword.length;
      const proveraIme =UserName.length;
      var numberAsInt = parseInt(provera, 10);  
      var NameAsInt = parseInt(proveraIme, 10);  
      
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(UserEmail)) {
      if(numberAsInt>5){
        if(NameAsInt>2){
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
          }else{
            alert('Унесите ваше име')
          }
          }else{
            alert('Морате унети лозинку')
           
          }
       }else{
        alert('Унос мора бити у формату маила')
       }
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
              maxLength = {30}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="E-mail"
              onChangeText={UserEmail => this.setState({UserEmail})}
              maxLength = {30}
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              
            />
     
            <TextInput
              // Adding hint in Text Input using Place holder.
              placeholder="Лозинка"
              onChangeText={UserPassword => this.setState({UserPassword})}
             // Making the Under line Transparent.
              maxLength = {20}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
            />
            <Picker style={styles.picker}
  selectedValue={this.state.language}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Цивилни сектор" value="civilni" />
  <Picker.Item label="Државни сектор" value="drzavni" />
  <Picker.Item label="Професор" value="fakultet" />
  <Picker.Item label="Студент" value="student" />
</Picker>

     <View style={styles.tema}>
     <TouchableHighlight
           style={styles.submit}
           onPress={this.UserRegistrationFunction}
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
      
     
  
    </KeyboardAvoidingView>
                
        );
      }
    }
          
      




    const styles = StyleSheet.create({
      picker: {
          marginBottom: 20
      },
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
     },
     
  tema:{
    
    marginTop: 10,
    flexDirection:'row',
    
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
     });

