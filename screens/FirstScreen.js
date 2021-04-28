import React, { Component } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AntDesign} from 'react-native-vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, View ,Keyboard} from 'react-native';
import ListingScreen from './ListingScreen';
import PaymentScreen from './PaymentScreen';
import ContactScreen from './ContactScreen';



    
  // const Tab = createMaterialBottomTabNavigator();

      const Tab = createBottomTabNavigator();
function FirstScreen({route,navigation}) 
{var numaf= route.params.numaff;
  console.log(numaf)
  
return (
 
     <Tab.Navigator activeColor="white" 
     
     barStyle={{backgroundColor:"#19456b"}} 
     
    tabBarOptions={{
      activeTintColor:"blue",
      //keyboardHidesTabBar:true,
      
      //showLabel:false,
      style:{ 
        position:"absolute",
        left:15,
      right:15,
      bottom:25,
      borderRadius:30,
      borderTopColor:"blue",
      borderWidth:0.5,
      borderColor:"blue",
      borderTopWidth:0.3,
     // backgroundColor:"blue",
      height:60,
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
        name="Pre-payment" 
        //component={PaymentScreen} 
        >
           {() => {
        const y =numaf.toString();
        return <PaymentScreen  numaf={numaf} navigation={navigation} text="xo" />}}
        </Tab.Screen>
<Tab.Screen
        options={{
        tabBarIcon: ({ color }) => (
        <AntDesign name="message1" color={color} size={23} />
        ),
        }}
        name="Contact" 
        //component={PaymentScreen} 
        >
           {() => {
        const y =numaf.toString();
        return    <ContactScreen numaf={numaf} navigation={navigation} text="xo" />  }}
        </Tab.Screen>   
  </Tab.Navigator>
 
  );


}
const styless = StyleSheet.create({
   
})
export default FirstScreen ;