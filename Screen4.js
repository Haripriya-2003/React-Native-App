import  React ,{Component} from 'react';
import {  FlatList , Text, Image,View } from "react-native";
import styles from './Styles';
 export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[{name:'Pasta',price:70,image:'https://freerangestock.com/thumbnail/8471/pasta-with-tomato-dressing.jpg'},{name:'Sphagetti with Truffle',price:110,image:'https://media.istockphoto.com/photos/grilled-vegetable-sphagetti-pasta-isolated-on-white-picture-id462883499?k=20&m=462883499&s=612x612&w=0&h=hflxW6GY51lZjPlrZ8Wx_fA_miqk9GTqdZtjmux8kB8='},{name:'Sphagetti(Cheese)',price:120,image:'https://media.istockphoto.com/photos/pasta-with-mushroom-sauce-picture-id504271280?k=20&m=504271280&s=612x612&w=0&h=MZAmlSgnH7YNiFX82m13t6rt6MIwRl7g4IYRZ93H9s8='},{name:'Pizza',price:80,image:'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg'},{name:'Spring Lasagna',price:110,image:'https://media.istockphoto.com/photos/meat-lasagna-picture-id543663322?k=20&m=543663322&s=612x612&w=0&h=TzVt9HU-P_Yc-1Z4UUxPrdSAs62eL12j-z3QicA8CGc='},{name:'Caprese-salad',price:40,image:'https://img.freepik.com/free-photo/fresh-italian-salad-antipasto-called-caprese-with-buffalo-mozzarella-sliced-tomatoes-basil-with-olive-oil-ingredients-vegetarian-caprese-salad-italian-food-top-view-rustic-style_1150-44797.jpg?w=996&t=st=1661600568~exp=1661601168~hmac=de4540b5258060d4609a1c6fe2300637129ace32b4f6319857facaae26c74e46'},{name:'Focaccia-bread',price:50,image:'https://img.freepik.com/premium-photo/closeup-mouthwatering-homemade-tomato-garlic-italian-focaccia-bread_76000-9002.jpg?w=996'}]
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




