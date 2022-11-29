import  React ,{Component} from 'react';
import {   Text, Alert, TextInput, ImageBackground, TouchableOpacity,View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const image = { uri: "https://img.freepik.com/free-photo/indian-condiments-with-copy-space-view_23-2148723492.jpg?w=1380&t=st=1661085232~exp=1661085832~hmac=8c781b6570700c5f2ed6bee762dc00532f12c6b8012de5e7fa7250c13598f13b" };
export default class SplashScreen extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        phoneno:'',
    };
    this.myTextInput1 = React.createRef();
    this.myTextInput2 = React.createRef();
  }
  updateusername = (txt) => {
    this.setState({
      username:txt
    })
  }
  updatephoneno = (txt) => {
    this.setState({
      phoneno:txt
    })
  }
  nextscreen=async()=>{
         if(this.state.username.length >=2 && this.state.phoneno.length ==10){
          var obj={};
          obj.name=this.state.username;
          obj.phone=this.state.phoneno;
          var value=JSON.stringify(obj);
          await AsyncStorage.removeItem('key1')
          await AsyncStorage.removeItem('key2')
          await  AsyncStorage.setItem('key1',value)
          this.myTextInput1.current.clear();
          this.myTextInput2.current.clear();
          this.props.navigation.navigate({routeName:'ProfileScreen',name:'Userdetails'})
        }
       else
           { 
             Alert.alert("Enter valid username and  10-digit phone-number") ;
            return false;} 
  }
    render()
  {
    return (
      <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <Text style={styles.styletext}>  A Taste You will Remember !! </Text>
     <TextInput ref={this.myTextInput1}
              value={this.state.username}  
              onChangeText = {this.updateusername}
              style={styles.design} 
              placeholder='Name'
              autoCapitalize='words'
              placeholderTextColor='lightblue'
               />
        <TextInput ref={this.myTextInput2}
              value={this.state.phoneno}  
              onChangeText = {this.updatephoneno}
              style={styles.design} 
              placeholder='Mobile'
              placeholderTextColor='lightblue'
               /> 
            <TouchableOpacity
                 style={styles.loginbutton}
                   onPress={this.nextscreen}
                >   
                <Text style={styles.logintext}>LOGIN</Text>
                 </TouchableOpacity> 
                 </ImageBackground>
                 </View>
    );
}
}