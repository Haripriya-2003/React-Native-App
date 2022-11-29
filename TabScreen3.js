/*scrollEnabled={this.state.isScrollEnabled}
<ScrollView
          style={{ flex: 1 }} 
          //style={styles.scrollView}
   // onContentSizeChange={this.scrollview}
    //scrollEnabled={scrollenabled}
    contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.textview2}>Hello {this.state.username}   </Text> 
          ***************************
viewabilityConfig={this.viewabilityConfig}
          <View >
 
  <TouchableOpacity 
         style={styles.detailsstyle}
        onPress={this.getinfo}>
        <Text style={styles.detailsstyle}>Click Here to Know About Us !!!!</Text>
    </TouchableOpacity> 
    <TouchableOpacity
    style={styles.button1}
        onPress={this.nextscreen}>
        <Text style={styles.text}>LOGOUT</Text>
    </TouchableOpacity>
     
 </View >
 //<Text style={styles.textview2}> Hello  {this.state.username} !!</Text>
           */
import React ,{Component  } from 'react';
import {  Text, View , ScrollView,TouchableOpacity ,FlatList,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles';
const Height = Dimensions.get('screen').height;
export default  class App extends React.Component   {
constructor(props) {
    super(props);
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100
  },
    this.state = {
        username:'',
        phoneno:'',
        date:'',
        time:'',
        table:'',
        current_time:'',
        current_date:'',
        screenHeight:0,
        isScrollEnabled:false,
        data:[]
    };
  }
  scrollview=(contentwidth,contentheight)=>{
      this.setState({
        screenHeight:contentheight
      })
    }
  updateusername = (txt) => {
    this.setState({
      username:txt
    })
  }
  updatephone = (txt) => {
    this.setState({
      phoneno:txt
    })
  }
  updatedate = (txt) => {
    this.setState({
      date:txt 
    })
  }
  updatetime = (txt) => {
    this.setState({
      time:txt   
    })
  }
  updatetable = (txt) => {
    this.setState({
      table:txt
    })
  }
  updatedata=(txt)=>{
    this.setState({
      data:txt
    })
  }
 nextscreen=async()=>{
           await AsyncStorage.clear();
           await AsyncStorage.removeItem('key1')
           await AsyncStorage.removeItem('key2')
         this.props.navigation.navigate( {routeName:'SplashScreen',name:'Login'})      
}
  getinfo=async()=>{
    this.props.navigation.navigate({routeName:'DetailsScreen',name:'details'})       
}
async UNSAFE_componentWillMount(){
  try{
            var data1 = await   AsyncStorage.getItem('key1') 
            var data2 = await   AsyncStorage.getItem('date') 
            var data3 = await   AsyncStorage.getItem('time') 
            var value1= JSON.parse(data1)
            var data4 = await  AsyncStorage.getItem('key2')   
            var value2= JSON.parse(data4)
            //console.log(value2);
             this.setState({
              data:value2
              })
             //console.log(this.state.data);
         if(value1!==null || value2!=null){
          this.setState({
            username:value1.name,
            phoneno:value1.phone,
            date:value2.date,
            time:value2.time,
            table:value2.table,
            current_date:data2,
            current_time:data3,
            screenHeight:2000
          }) 
        }
      }
      catch(e){}
} 
renderFooter=()=>{
  return(
    <View style={styles.FooterStyle} >
       <TouchableOpacity 
         style={styles.detailsstyle}
        onPress={this.getinfo}>
        <Text style={styles.detailsstyle}>Click Here to Know About Us !!!!</Text>
         </TouchableOpacity> 
        <TouchableOpacity
    style={styles.button1}
        onPress={this.nextscreen}>
        <Text style={styles.text}>LOGOUT</Text>
    </TouchableOpacity>
      </View>
 
 );
}
renderheader=()=>{
  return(
  <View>
     
     <Text style={styles.textview2}> Hello  {this.state.username} !!</Text>
     <Text style={styles.detailsstyle1}> Your Bookings </Text>
     
    </View>
    );
}
renderview = ({item,index}) => {
    return(
         <View style={styles.flatliststyle}>  
   <Text style={styles.flatliststyle1}>  Booked  at   {this.state.current_date}  {this.state.current_time}       </Text>                                       
   <Text style={styles.flatliststyle1}>  Number of  tables -   {item.table}     </Text>
   <Text style={styles.flatliststyle1}>  You are expected on  <Text style={{ fontWeight: "bold",}}>{item.date}  at  {item.time} </Text>  </Text>
 <Text>         </Text>
  </View>
      );
}
render(){ 
   var scrollenabled=this.state.screenHeight > Height;
return(    
 <View >

        <FlatList
          data={this.state.data}
          renderItem={this.renderview}
          extraData={this.state}
          scrollEnabled={scrollenabled}
          ListFooterComponent={this.renderFooter()}
          ListFooterComponentStyle={styles.HeaderStyle}
          ListHeaderComponent={this.renderheader()}
          ListHeaderComponentStyle={styles.HeaderStyle}
          /> 

              </View>     
  );
}
}

     