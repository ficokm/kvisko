import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  ListView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './Animbutton'
import pitanja from './PitanjaProbaScreen'
import Pitanja from './Pitanja'

const { width, height } = Dimensions.get('window')
let arrnew = []
  const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option1",
      "options" : {
        "option1" : "Београд",
        "option2" : "Ниш",
     
      },
      "question" : "Који је главни град Србије"
    },
    "question2" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "Мојковац",
          "option2" : "Баосићи",
          "option3" : "Никшић",
          "option4" : "Подгорица"
        },
      "question" : "Који је главни град Црне горе?"
    },
    "question3" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "-5",
          "option2" : "-6",
          "option3" : "0",
          "option4" : "-1"
        },
      "question" : "Селектуј највећи број од понуђених"
    },
    "question4" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "Jabuka",
          "option2" : "Jabuke",
          "option3" : "Kruska",
          "option4" : "Apple"
        },
      "question" : "Како се зове на енглеском пише јабука?"
    },
    "question5" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "****ш",
          "option2" : "Крадеш",
          "option3" : "Лазеш",
          "option4" : "Гледаш"
        },
      "question" : "Заврши познату изреку: није лепо то што ____"
    }
  }
}
} 
export default class Quiz extends Component {
 
  
  componentDidMount() {
         
    return fetch('http://vucko.x3.rs/dev-sajt/kvisko/PitanjaAPI.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
          
        }, function() {
          this.setState({
 
            Pitanje123 : responseJson[0].pitanje,
            Opcija1 : responseJson[0].opcija_1,
            Opcija2 : responseJson[0].opcija_2,
            Opcija3 : responseJson[0].opcija_3,
            Opcija4 : responseJson[0].opcija_4,
            TacnaOpcija :responseJson[0].tacno_pitanje,
          })
          if(this.state.dataSource !== null){
          //ToastAndroid.show(Opcija4, ToastAndroid.SHORT);
          
            
          }
        });
      })
      .catch((error) => {
        console.error(error);
      }); 
    

      
  }
  
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0,
      Pitanje123 : '',
      Opcija1 : '',
      Opcija2 : '',
      Opcija3 : '',
      Opcija4 : '',
      TacnaOpcija : '',
     
    }

  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
      
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/5)
     }
  }
  _answer(status,ans){

    if(status == true){
        const count = this.state.countCheck + 1
        this.next()
        
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
          ToastAndroid.show('Odlicno', ToastAndroid.SHORT);
          
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
        ToastAndroid.show('Glupane', ToastAndroid.SHORT);
        
       }
      }

  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>

        <Animbutton countCheck={_this.state.countCheck} onColor={"green"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]}
        
        />

      </View>)
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>

      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>

      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
    {/* <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
    <View style={{margin:15}} />*/ }

        {/* <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, backgroundColor:"#2196F3"}}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
      </TouchableOpacity >*/}

        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: '#2196F3'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});