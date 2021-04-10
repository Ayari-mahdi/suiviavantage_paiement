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
      
function FirstScreen({route,navigation}) 
{var numaf= route.params.numaff;
  console.log(numaf)
  
return (
   <Tab.Navigator  activeColor="white" barStyle={{backgroundColor:"#19456b" }}>
    <Tab.Screen        
     options={{
     tabBarLabel: 'listing',
     tabBarIcon: ({ color }) => (
     <MaterialCommunityIcons name="format-list-bulleted" color={color} size={23} />
     ),
    }} 
    name="listing" 
     //component={ListingScreen,{numaf:numaf}}
   // initialParams={numaf}
    >
   
   {() => {
      const y =numaf.toString();
     return <ListingScreen  numaf={numaf} text="xo" />}}
   </Tab.Screen>

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