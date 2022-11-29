import  React ,{Component} from 'react';
import {  FlatList , Text, Image,View } from "react-native";
import styles from './Styles';
 export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[{name:'Veg Fried Rice',price:150,image:'https://media.istockphoto.com/photos/healthy-and-tasty-veg-fried-rice-made-of-mixed-veggies-served-in-bowl-picture-id1292617473?k=20&m=1292617473&s=612x612&w=0&h=zrpzZkCHNX_uWyz1TqegG2Nmy8qsNmfRfXJvh6arzpc='},{name:'Veg Noodles',price:120,image:'https://media.istockphoto.com/photos/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-a-picture-id1292637257?k=20&m=1292637257&s=612x612&w=0&h=98lg6bvtgm6sxkLGhdVzZu4att5TKP2znz6hGo2Mg_M='},{name:'Cheese Balls',price:60,image:'https://media.istockphoto.com/photos/fried-mac-and-cheese-balls-selective-focus-picture-id609932320?k=20&m=609932320&s=612x612&w=0&h=Vib7zAt3mlqyrdc8XTyuPh_HtlJ5mjsxytiQTGY8kvU='},{name:'Momos',price:80,image:'https://media.istockphoto.com/photos/japanese-dumplings-gyoza-with-pork-meat-and-vegetables-picture-id1133151212?k=20&m=1133151212&s=612x612&w=0&h=UO9ZhFWOSx9y_ISDp6auBmma3GiQd4yWpMdqo3O2TMo='},{name:'Spring Roll',price:50,image:'https://media.istockphoto.com/photos/egg-rolls-or-spring-rolls-friedtraditional-chinese-thai-restaurant-picture-id1209457586?k=20&m=1209457586&s=612x612&w=0&h=Hm2QzPk30FyYdwVle6-w2HmYf5hWTcCaiNAhbW1beXc='},{name:'Veg Manchurian',price:100,image:'https://img.freepik.com/premium-photo/veg-chicken-manchurian-with-gravy-popular-food-india-served-bowl-with-chopstick_466689-34960.jpg?size=626&ext=jpg&ga=GA1.2.572951511.1661595970'},{name:'Vegetable Chopsuey',price:120,image:'https://media.istockphoto.com/photos/beef-with-vegetables-picture-id528296096?k=20&m=528296096&s=612x612&w=0&h=-X9YMt-BRXBI6sRQ87-9eLlpLAG5_iQKbFzg8YUU6fA='}]
    };
  }
  
   renderview = ({item,index}) => {
    return(
      <View >
          <View style={styles.tableview}>
           <Image
              style={styles.imagelogo1} 
              source={{uri:item.image}}
             />
      <Text style={styles.textview}> {item.name}  </Text>
      <Text style={styles.textview}>  ₹{item.price} </Text>
      </View> 
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


