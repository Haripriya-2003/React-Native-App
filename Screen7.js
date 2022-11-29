import  React ,{Component} from 'react';
import {  FlatList , Text, Image,View } from "react-native";
import styles from './Styles';
 export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[{name:'Ice Cream',price:65,image:'https://media.istockphoto.com/photos/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-picture-id1161805849?k=20&m=1161805849&s=612x612&w=0&h=LTR45FROAo4nIQJ5xl3Ur_-2wdagm608Ve1pSVyMkyo='},{name:'Special Faloda',price:85,image:'https://media.istockphoto.com/photos/popular-indian-asian-summer-drink-on-wooden-surface-ie-gulab-falooda-picture-id1156955545?k=20&m=1156955545&s=612x612&w=0&h=1dciJa5FSlCKSt8ZBu6HCq-y-pQWrgV4Y30WXkA_NJY='},{name:'Crunch Kulfi',price:55,image:'https://media.istockphoto.com/photos/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy-picture-id657073780?k=20&m=657073780&s=612x612&w=0&h=NsB0dGlvR4742Y0FS41qKL4i0u57clyAzrO7Ua26E_Q='},{name:'Milkshakes',price:40,image:'https://media.istockphoto.com/photos/milkshake-trio-picture-id172192393?k=20&m=172192393&s=612x612&w=0&h=dhTrLSSECEurcCAkwRksdlj9C2EM64liK0nCJvF0CWY='},{name:'Salads',price:30,image:'https://media.istockphoto.com/photos/salad-plate-picture-id175197961?k=20&m=175197961&s=612x612&w=0&h=SDYkOzsn_stA97UW1O_YqBoB0RIncCbzR38VzhjQ8T0='},{name:'Apple pie',price:75,image:'https://cdn.pixabay.com/photo/2015/12/01/08/13/apple-pie-1071747__340.jpg'},{name:'Lemon Tart',price:65,image:'https://www.ndtv.com/cooks/images/lemon.tart.jpg'}]
    };
  }
renderview = ({item,index}) => {
    return(
      
          <View style={styles.tableview}>
           <Image
              style={styles.imagelogo1} 
              source={{uri:item.image}}
             />
      <Text style={styles.textview}> {item.name}  </Text>
      <Text style={styles.textview}>  ₹{item.price} </Text>
      </View> 
  );
  }
   render(){
  return (
    <View style = {styles.container}>
    <FlatList
       numColumns={1}
          data={this.state.list}
          renderItem={this.renderview}  
      />
      </View>
    );
  }
}
