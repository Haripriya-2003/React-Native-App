import  React ,{Component} from 'react';
import {  Text, Alert, TextInput,View ,ImageBackground,TouchableOpacity} from "react-native";
import styles from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = { uri: "https://img.freepik.com/free-photo/concept-seafood-oysters-space-text_185193-84812.jpg?w=740&t=st=1665408704~exp=1665409304~hmac=349b214df5400980dab8fd5ee0b218969676a73c671717c5aebddae6d5244ea7"};
export default class TabScreen1 extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        phoneno:'',
        date:new Date(Date.now()),
        selected_date:'',
        selected_time:'',
        time:new Date(Date.now()),
        show1:false,
        show2:false,
        table:'',
        userlist:[],
        previous_list:[],
        data2:[{ label: '1', value: '1' },{ label: '2', value: '2' },{ label: '3', value: '3' },{ label: '4', value: '4' },{ label: '5', value: '5' },{ label: '6', value: '6' },{ label: '7', value: '7' },{ label: '8', value: '8' },]
    };
    this.myTextInput3 = React.createRef();
    this.myTextInput4 = React.createRef();
  }
  updatelist=(txt)=>{
 this.setState({
    userlist:txt
  })
}
updatepreviouslist=(txt)=>{
 this.setState({
    previous_list:txt
  })
}
  updatecurrenttime = async() => {
     try{
    var hours =this.state.date.getHours(); 
    var min = this.state.date.getMinutes(); 
    var timeString;
    if(hours>12){
    hours-=12;
    timeString =hours + ':' + min + ' PM ';
  }
  else{ timeString =hours + ':' + min + ' AM ';}
    await AsyncStorage.setItem('time',timeString);
  }
    catch(e){} 
  }
   updatecurrentdate = async() => {
    var date1 = this.state.date.getDate(); 
    var month1 =this.state.date.getMonth() +1 ; 
    var year1 = this.state.date.getFullYear(); 
    var datestring=date1 + ' / ' + month1 + ' / ' + year1;
    await AsyncStorage.setItem('date',datestring);
  }
  updateusername = (txt) => {
    this.myTextInput1.current.clear();
    this.setState({
      username:txt
    })
  }
  updatephone = (txt) => {
    this.myTextInput2.current.clear();
    this.setState({
      phoneno:txt
    })
  }
  updatedate = (txt) => {
    this.setState({
      selected_date:txt 
    })
  }
  updatetime = (txt) => {
    this.setState({
      selected_time:txt   
    })
  }
  updatetable = (txt) => {
    this.setState({
      table:txt
    })
  }
  updateshow1 = (txt) => {
    this.setState({
      show1:txt
    })
  }
  updateshow2 = (txt) => {
    this.setState({
      show2:txt
    })
  }
onChangeTime = (event, selectedTime) => {
  var  timeString;
  this.updateshow2(false);
  var  hour = selectedTime.getHours();
  var min = selectedTime.getMinutes(); 
  if(hour>12){
    hour-=12;
    timeString =hour + ':' + min + ' PM ';
  }
  else{
    timeString =hour + ':' + min + ' AM ';
    }
  this.updatetime(timeString);
}
onChangeDate = (event, selectedDate) => {
  this.updateshow1(false);
  var  year = selectedDate.getFullYear();
  var month = selectedDate.getMonth()+1; 
  var  day= selectedDate.getDate();
  var  dateString = day + '-' + month + '-' +  year;
  this.updatedate(dateString);
}
  selectdate=()=>{
     this.updateshow1(true);
  }
  selecttime=()=>{
     this.updateshow2(true);
  }
  nextscreen=async()=>{
    if( this.state.selected_time.length !=0 && this.state.table.length !=0 && this.state.selected_date.length !=0 && this.state.username.length !=0 && this.state.phoneno.length !=0)
      {
        try{
            var list= await AsyncStorage.getItem('key2')
            var value1= JSON.parse(list)
            //console.log('key',value1);
            if(value1!=null)
            {this.updatepreviouslist(value1);}
            //console.log(this.state.previous_list);
            var obj={};    
            obj.date=this.state.selected_date;
            obj.time=this.state.selected_time;
            obj.table=this.state.table;
            //console.log('just object',obj);
            var userarray = this.state.previous_list;
            //console.log('previous list',userarray);
            //console.log('updated array');
            userarray.push(obj);
            //console.log('updated array',userarray);
            this.updatelist(userarray);
            //console.log('updated list',this.state.userlist);
            var value=JSON.stringify(this.state.userlist);
            //console.log(value);
            await AsyncStorage.setItem('key2',value)
            var a=await AsyncStorage.getItem('key2')
            var b=JSON.parse(a);
            //console.log('retrieved value ',b);
            this.updatecurrenttime();
            this.updatecurrentdate();
            this.myTextInput3.current.clear();
            this.myTextInput4.current.clear();

          }
          catch(e){}
          Alert.alert("Thank you for Booking the table. Enjoy your feast!!!");
      }
   else 
    { Alert.alert("Fill all the Details"); }
  }
  async UNSAFE_componentWillMount(){
     var data1 =await  AsyncStorage.getItem('key1') 
      var value1=JSON.parse(data1)
      this.setState({
      username:value1.name,
      phoneno:value1.phone
    })
  }
 render()
  {  
     return (
          <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.container}>
       <Text style={styles.details}>  Find your seat at the table !! </Text>
        <TextInput 
             value={this.state.username}  
               onChangeText = {this.updateusername}
              style={styles.design1} 
              placeholder='Name'
               />
         <TextInput 
              value={this.state.phoneno}  
               onChangeText = {this.updatephone}
              style={styles.design1}    
              placeholder='Phone'
               />    
       <TextInput ref={this.myTextInput3}
              style={styles.design1}
              value={this.state.selected_date}
              onPressIn={this.selectdate}
             onChangeText={this.updatedate}
             placeholder='Date'
             />
     {this.state.show1 && (
        <DateTimePicker
          value={this.state.date}
          mode={'date'}
          display={Platform.OS === 'android' ?  'default' : 'spinner' }
          onChange={this.onChangeDate}
          style={styles.datePicker}
         positiveButtonLabel="Set Date"
        />
        )}
   <TextInput ref={this.myTextInput4}
              style={styles.design1}
              value={this.state.selected_time}
             onPressIn={this.selecttime}
             onChangeText={this.updatetime}
             placeholder='Time'
             />
     {this.state.show2 && (
        <DateTimePicker
          value={this.state.time}
          mode={'time'}
          display={Platform.OS === 'android' ?  'default' : 'spinner'  }
          onChange={this.onChangeTime}
          style={styles.datePicker}
          positiveButtonLabel="Set Time"
        />
        )}    
        <Dropdown
        style={styles.design1}
        placeholderStyle={styles.dropdownStyle}
        selectedTextStyle={styles.textstyle}
        containerStyle={styles.stylecontainer}
        data={this.state.data2}
        labelField="label"
        valueField="value"
        placeholder="Tables"
        searchPlaceholder="Search..."
        onChange={item => {
          this.updatetable(item.value);
        }}
      />
       <TouchableOpacity
               style={styles.loginbutton}
               onPress={this.nextscreen}
              > 
              <Text style={styles.logintext}>TABLE</Text>
              </TouchableOpacity>  
          </ImageBackground>
           </View>
  	);
  }  
}

