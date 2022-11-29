import  React ,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screen1';
import ProfileScreen from './Screen2';
import SplashScreen from './Screens';
import DetailsScreen from './Detailspage';
const Stack = createNativeStackNavigator();  
const   MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=' '
          component={HomeScreen}
           options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Login'
          component={SplashScreen}
           options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Userdetails'
          component={ProfileScreen}
           options={{
            headerShown: false,
          }}  
        /> 
        <Stack.Screen
          name='details'
          component={DetailsScreen}
           options={{
            headerShown: false,
          }}   
        /> 
      </Stack.Navigator>
    </NavigationContainer>       
  );
};
export default MyStack;