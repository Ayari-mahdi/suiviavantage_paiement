import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import ListingScreen from './ListingScreen';
import PaiementScreen from './PaiementScreen';



    
  // const Tab = createMaterialBottomTabNavigator();

      const Tab = createBottomTabNavigator();
function FirstScreen({route,navigation}) 
{var numaf= route.params.numaff;
  console.log(numaf)
  
return (
 
     <Tab.Navigator activeColor="white" 
     barStyle={{backgroundColor:"#19456b"}} 
    tabBarOptions={{
      
     // showLabel:false,
      style:{ 
        position:"absolute",
        left:25,
      right:25,
      bottom:25,
      borderRadius:30,
      backgroundColor:"white",
    //  height:50,
    paddingBottom:5
        }
    }}
     

    >
       <Tab.Screen        
        options={{
        tabBarLabel: 'listing',
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={23} />),
         }} 
        name="listing" 
     //component={ListingScreen,{numaf:numaf}}
  
        > 
        {() => {
        const y =numaf.toString();
        return <ListingScreen  numaf={numaf} navigation={navigation} text="xo" />}}
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