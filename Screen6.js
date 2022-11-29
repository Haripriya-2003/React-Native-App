import  React ,{Component} from 'react';
import {  FlatList , Text, Image,View } from "react-native";
import styles from './Styles';
 export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[{name:'Chappati',price:50,image:'https://media.istockphoto.com/photos/traditional-indian-roti-ready-to-serve-picture-id526846282?k=20&m=526846282&s=612x612&w=0&h=H8iikcm6552wIy62TYBmPHn_aiARx9sayRc8r0Fk2Vw='},{name:'Tandorri Naan',price:60,image:'https://media.istockphoto.com/photos/indian-naan-bread-with-garlic-butter-on-wooden-table-picture-id1143530040?k=20&m=1143530040&s=612x612&w=0&h=JVVJ5kD_7-k2wiAnmxxNjnpqF_wJ4oWKUUmBetD_FV8='},{name:'Garlic Naan',price:55,image:'https://media.istockphoto.com/photos/indian-naan-bread-with-herbs-and-garlic-seasoning-on-plate-picture-id1253943176?k=20&m=1253943176&s=612x612&w=0&h=JK7ElytupeLzZE0ZZneXlqR3yoGw8mF3XOQ1pX5W7To='},{name:'Puri Paratta',price:75,image:'https://media.istockphoto.com/photos/beetroot-paratha-is-a-indian-pan-fried-whole-wheat-flatbread-made-of-picture-id1336525123?k=20&m=1336525123&s=612x612&w=0&h=Qk3XE6-MbH9xVz73PaYoJ-OFqRm5KuDl8dHwts9UoeA='},{name:'Whole Wheat Naan',price:45,image:'https://media.istockphoto.com/photos/stack-of-homemade-flour-tortillas-picture-id184816355?k=20&m=184816355&s=612x612&w=0&h=NreCTvjdo9IhVodCvp3dcZEg0F5V-v0TvuD79q2--jY='},{name:'Veg Gobi',price:50,image:'https://hebbarskitchen.com/wp-content/uploads/2019/07/tandoori-gobi-recipe-tandoori-gobhi-tandoori-cauliflower-tikka-1-682x1024.jpeg'},{name:'Tandoori Paneer',price:50,image:'https://images.assetsdelivery.com/compings_v2/witty234/witty2340912/witty234091200077.jpg'}]
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
