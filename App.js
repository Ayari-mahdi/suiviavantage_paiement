import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {MaterialIcons} from 'react-native-vector-icons';

import { StyleSheet, Text, View,Button,
  Alert,TouchableHighlight, StatusBar,
  Platform,Dimensions } from 'react-native';
import {userDimensions,useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from './screens/WelcomeScreen';
import FirstScreen from './screens/FirstScreen';
import ListingScreen from './screens/ListingScreen';
import PaiementScreen from './screens/PaiementScreen';
import FormScreen from './screens/FormScreen';
import DetailsScreen from './screens/DetailsScreen';
export default function App()  {
  const Stack = createStackNavigator();
 const {landscape} = useDeviceOrientation();
  return (
    
  <NavigationContainer >
   
  <Stack.Navigator >
    <Stack.Screen name="suivi avantage"
      options={{headerShown:false,headerStyle: {backgroundColor: "white"},
      headerTintColor: 'black', headerTitleStyle: {
        //fontWeight: 'bold', //Set Header text style
      },
      }}
      component={WelcomeScreen} />
    <Stack.Screen name="login" 
      options={{headerStyle: {
      backgroundColor: "#1abc9c"}}}  
      component={FirstScreen} />
    <Stack.Screen name="FormScreen" options={{headerStyle: {
      backgroundColor: "#1abc9c" //Set Header color
      },title:"Back"}}
      component={FormScreen} />
    <Stack.Screen name="DetailsScreen" options={{
      headerShown:false
      }}
      component={DetailsScreen} />
  </Stack.Navigator>
  
</NavigationContainer>);
  
  
  <FirstScreen/>
  ///(
  ///  <View style={styles.container}>
  ///  <View style={{
   ///     backgroundColor:"red",
   ////    width:"100%",
    //// ////   height:landscape ?"100%": "30%",
        
   ///   }}></View>
   ///   <Button color="green" title="click me" 
   ///   onPress={()=> Alert.alert("my title","my message",
    ///  [{text:"yes",onPress:()=>console.log("yes")},
   ///   {text:"no"},])}>
 
    ///  </Button>
    ///</View>  <TouchableHighlight 
       ///         style ={{
          ///          height: 40,
            ///        width:160,
            ///        borderRadius:150,
                    
             ///       marginLeft :50,
               ///     marginRight:50,
            ///        marginTop :15
            ///    }}>
      ///</TouchableHighlight><Button color="green" title="click me" 
    /// onPress={()=> Alert.prompt("my title","my message",
     /// text => console.log(text))}>

     /// </Button>
    ///  </TouchableHighlight>
   ///   <Text>Opennn up App.js to start working on your app!</Text>
    ///  <StatusBar style="auto" />
   /// </View>
  ///);
///}

///const styles = StyleSheet.create({
 /// container: {
  ///  flex: 1, 
  ///  backgroundColor: 'dodgerblue',
  ///  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,
    //alignItems: 'center',
    //justifyContent: 'center',
  ///},
//}
///);
}
