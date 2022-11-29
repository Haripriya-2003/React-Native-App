import React from 'react'; 
 import { Text, View,Image} from 'react-native';   
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BookScreen from './TabScreen1';
import MenuScreen from './TabScreen2';
import SettingsScreen from './TabScreen3';
const Tab = createMaterialBottomTabNavigator();
  
  export default function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Menu'
        barStyle={{ backgroundColor: 'white'}}
        >
        <Tab.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused}) => (
            <View >
            <Image 
            source={require('./bowl-mix-outline.png')}
            style={{
              tintColor:focused ?'blue' :'black'
            }}/>
            </View>
          ),  
        }}
      />
      <Tab.Screen
        name='Book'
        component={BookScreen}
        options={{
          tabBarIcon: ({ focused}) => (
            <View >
            <Image 
            source={require('./bookmark-outline.png')}
            style={{
              tintColor:focused ?'blue' :'black',
            }}/>
            </View>
          ),
        }}
      />
      
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused}) => (
            <View >
            <Image 
            source={require('./brightness-5.png')}
            style={{
              tintColor:focused ?'blue' :'black'
            }}/>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}