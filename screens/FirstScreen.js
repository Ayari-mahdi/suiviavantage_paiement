import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import {userDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './WelcomeScreen';
import styles from './WelcomeScreen'
import {StyleSheet,View,Text,
    SafeAreaView,TextInput,Alert,
    TouchableHighlight,
    Image,Platform,StatusBar } from 'react-native';
import ListingScreen from './ListingScreen';
import PaiementScreen from './PaiementScreen';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


    
    const Tab = createMaterialBottomTabNavigator();
      
function FirstScreen({navigation}) 
{
    const [number, onChangeNumber,number2,onChangeNumber2] = React.useState(null);
    const {landscape} = useDeviceOrientation();
    const[isActive,setIsActive] = React.useState(false);
    const[isActive2,setIsActive2] = React.useState(false);
    const customStyle = isActive ? styles.input2 : styles.input;    
    const customStyle2 = isActive2 ? styles.input2 : styles.input;      
return (
    

   <Tab.Navigator  activeColor="white" barStyle={{backgroundColor:"#1abc9c" }}>
    <Tab.Screen        
     options={{
     
     
     tabBarLabel: 'listing',
     tabBarIcon: ({ color }) => (
     <MaterialCommunityIcons name="format-list-bulleted" color={color} size={23} />
     ),
    }} 
    name="listing" component={ListingScreen} />
    
    <Tab.Screen
     options={{
        
     tabBarIcon: ({ color }) => (
     <MaterialCommunityIcons name="playlist-edit" color={color} size={23} />
     ),
    }}
    name="formulaire" component={PaiementScreen} />
    
  </Tab.Navigator>
 
  );


}
const styless = StyleSheet.create({
   
})
export default FirstScreen ;