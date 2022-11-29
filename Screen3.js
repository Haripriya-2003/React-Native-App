import  React ,{Component} from 'react';
import {  FlatList , Text, Image,View } from "react-native";
import styles from './Styles';
 export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[{name:'Aloo Gobi',price:100,image:'https://media.istockphoto.com/id/1330874899/pl/zdj%C4%99cie/wega%C5%84ski-przepis-o-kalafior-i-ziemniaki-jako-g%C5%82%C3%B3wne-sk%C5%82adniki-przepis-jest-znany-jako-aloo.webp?s=612x612&w=is&k=20&c=2ahV8MKOukUW1pMq-eMCy45H2ORZvxnzj-vOZ13d3G0='},{name:'Aloo Mutter',price:90,image:'https://media.istockphoto.com/photos/delicious-aloo-jeera-indian-vegan-food-picture-id1091567370?k=20&m=1091567370&s=612x612&w=0&h=a0nqrjpFpEL1mDswJHiczSgSkhbo-QIFBVEc18jsqM8='},{name:'Malai Kofta',price:120,image:'https://media.istockphoto.com/photos/malai-kofta-curry-in-black-bowl-at-dark-slate-background-malai-kofta-picture-id1219174099?k=20&m=1219174099&s=612x612&w=0&h=bdVdhf_OtWppko-f0nDvBxUTd6x3SU-W-x51Wr5Lvww='},{name:'Palak Paneer',price:130,image:'https://media.istockphoto.com/id/1402688982/photo/palak-paneer-spinach-cottage-cheese-curry-on-grey-background-top-view-of-indian-cuisine.webp?s=612x612&w=is&k=20&c=grptmr1DzzdR5vxHOEw5j62lX6h3Er1sK-347SQDOVY='},{name:'Dum Aloo',price:80,image:'https://media.istockphoto.com/photos/gobi-aloo-indian-curry-dish-picture-id187509517?b=1&k=20&m=187509517&s=170667a&w=0&h=KqeIWuI9ieLGpFLhwV1u-n8PTU4xOXFG1BMqdmMaf9E='},{name:'Dal Malkani',price:130,image:'https://media.istockphoto.com/photos/red-lentil-indian-soup-with-flat-bread-masoor-dal-picture-id495455834?b=1&k=20&m=495455834&s=170667a&w=0&h=jp0FaOosGXmFo0qiXLJ1M0igis6DuexZ9LSuD3sAVgU='}]
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

  
  


