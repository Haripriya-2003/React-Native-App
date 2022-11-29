import  React ,{useEffect} from 'react';
import { TouchableOpacity, Text, Image,View ,Alert} from "react-native";
import Styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = { uri: "https://st2.depositphotos.com/8301258/11691/v/450/depositphotos_116914166-stock-illustration-symbol-logo-cutlery-food-design.jpg" };
export default function App({navigation}) {
 const  nextscreen = async() =>{
     try{
           const  jsonValue =   await AsyncStorage.getItem('key1') 
            if(jsonValue!==null){navigation.navigate({routeName:'ProfileScreen',name:'Userdetails'}) }
          else{ navigation.navigate( {routeName:'SplashScreen',name:'Login'}) }      
      }
    catch(e){console.error(e);}             
  }
 useEffect(()=>{
  setTimeout(()=>{
   nextscreen();
    },10000);

},[]);
  return (
        <View style={{flex:1,backgroundColor:'white'}}>
        <Image source={image}  style={Styles.logoicon}/>
        <Text style={Styles.textlogo} > Royal Delights </Text>   
            </View>
  );
}
