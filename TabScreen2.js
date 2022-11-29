import  React ,{Component} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndianScreen from './Screen3';
import ItalianScreen from './Screen4';
import ChineseScreen from './Screen5';
import TandooriScreen from './Screen6';
import DessertsScreen from './Screen7';
const Tab = createMaterialTopTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
    tabBarLabelStyle: { fontWeight:'bold',fontSize: 10 ,color: 'brown'},
    tabBarItemStyle: { width: 90 },
    tabBarIndicatorContainerStyle:{color: 'black'},
    tabBarScrollEnabled:true
  }}
      initialRouteName="Indian"
    >
      <Tab.Screen
        name="Indian "
        component={IndianScreen}
      />
      <Tab.Screen
        name="Italian"
        component={ItalianScreen}
      />
      <Tab.Screen
        name="Chinese"
        component={ChineseScreen}
      />
      <Tab.Screen
        name="Tandoori"
        component={TandooriScreen}
      />
      <Tab.Screen
        name="Desserts"
        component={DessertsScreen}
      />

    </Tab.Navigator>
  );
}
