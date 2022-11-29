import  React ,{Component} from 'react';
import {   Text,Image, View ,ScrollView,Dimensions} from 'react-native';
import styles from './Styles';
const Height = Dimensions.get('screen').height;
export default class Detailspage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      screenHeight:0
    };
  }
    scrollview=(contentwidth,contentheight)=>{
      this.setState({
        screenHeight:contentheight
      })
    }
  render(){
    var scrollenabled=this.state.screenHeight > Height;
  return(
    <View style={{flex:1}}>
<ScrollView style={styles.scrollView}
    onContentSizeChange={this.scrollview}
    scrollEnabled={scrollenabled}>
  <Text  style={styles.detailstext3}>ABOUT US </Text>
  <Text  style={styles.detailstext}>
    We re-imagine everyday foods made with better ingredients.As a heart-centered brand that cares about its global impact, we emphasizes that key part of its brand in its mission statement. 
</Text>
<Text  style={styles.detailstext}>It’s key to remember that this approach doesn’t have to be boring.Add ingredients that showcase what makes your brand great. 
we effectively adds images, its social media links, and even the notable publications it’s been featured in, giving it plenty of credibility. All of our menu items are inspired by Multi cuisine and have been created by our head chef . Not only do we have fresh flown-in food from the northeast, but we also have a variety of dishes from all over India.
</Text>
<Text style={styles.detailstext}>Come dine with us & experience an authentic meal in an intimate dining space. We look forward to serving you!</Text>
<Image 
  source={{uri:'https://media.istockphoto.com/photos/restaurant-interior-part-of-hotel-picture-id1387098298?k=20&m=1387098298&s=612x612&w=0&h=Nso1aQ8lbMIuVuk88ku5pZ7-nSQ4E2Q1ULO3NhqMPco='}}  
  style={styles.detailsimage} />
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text> </Text>
<Text style={styles.detailstext1}> Contact Us  </Text>
<Text style={styles.detailstext2}> +917835634210 , +918896735211 </Text>


    </ScrollView>
     </View>
    );
}
}
