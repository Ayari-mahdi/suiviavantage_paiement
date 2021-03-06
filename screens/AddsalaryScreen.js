import React from 'react';
import {AntDesign} from 'react-native-vector-icons';
import * as Animatable from 'react-native-animatable'
import {MaterialIcons} from 'react-native-vector-icons';
import { View,Text,StyleSheet,TouchableWithoutFeedback,
TextInput,KeyboardAvoidingView,Keyboard,TouchableHighlight,
Dimensions,StatusBar,TouchableOpacity,ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';


function AddsalaryScreen ({route,navigation}) {
  const data = route.params.oneitem;
  const [number5, onChangeNumber5] = React.useState("");
  const[isActive5,setIsActive5] = React.useState(false);
  const customStyle5 = isActive5 ? styles.textInput2: styles.textInput;      
  const [istest5,setIstest5]=useState(""); 
  const [isLoading, setLoading] = React.useState(false);
    return (

        <KeyboardAvoidingView  
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >  
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
      >
        
           <Animatable.View 
      animation='fadeInLeftBig' delay={200}   
      style={styles.container1}
     >  
     <TouchableOpacity style={styles.closebutton}  onPress={()=>navigation.navigate('login')}>                  
     <Text style= {styles.close}> <AntDesign name='closecircle' color="black"  size={35}/> </Text>
    </TouchableOpacity>
     

        <View style={styles.inner}>
        <Text style={styles.header}>Ajouter le salaire trimestriel en millimes</Text>
        <Text style={styles.empname}>de {data.daa_nom} {data.daa_prenom}</Text>
        <TextInput placeholder="Salaire"
          onFocus={()=>{ setIsActive5(true) }}
          onBlur={()=> { setIsActive5(false); if(number5.trim()===""){setIstest5(true)} else { setIstest5(false)} }}
          onChangeText={onChangeNumber5}
          value={number5}
          placeholderTextColor="grey" 
          style={customStyle5} />
          {istest5? 
            <Animatable.Text animation="bounceIn" style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text>
            : <Animatable.Text animation="fadeOutRight"  style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/></Animatable.Text>
        }
 {isLoading ? 
            <View style={styles.loading} > 
            <ActivityIndicator  size="large" color="green"  />
            <Text style={{alignSelf:"center",fontSize:15}} >loading...</Text>
             </View> :(



        <TouchableHighlight
          style={styles.button} 
          underlayColor='grey'
          onPress={async() => {
           if (istest5===false)

            { setLoading(true);
             // navigation.navigate('login')

            try {
          let employer = await fetch("http://172.16.17.124:8081/employeeSalary"+number5,{method:'POST',body:data});
          console.log(number5);
          console.log(data);
          let result = await employer.json();
          setLoading(false)
          Alert.alert("salaire ajouter avec succ??s nom prenom :"+ data.daa_nom +
          " "+data.daa_prenom +':'+number5)
          return navigation.navigate('login');
          
        }
       catch(error)
        {   
        Alert.alert("failed","enter a correct affiliation number!!! "+ number +" doesnt exist",  
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]);
              setLoading(false);
              setIstest(true);
              setIstest2(true);
              setNumber("");
              setNumber2("");         
         }
                      
            } 
            else {
            
              if(number5.trim()===""){setIstest5(true)} else { setIstest5(false)}
            } 
          }}>
        <Text style={styles.submitText}>Submit</Text>
    </TouchableHighlight>)}
    </View>   
    </Animatable.View>
    
    </TouchableWithoutFeedback>     
    </KeyboardAvoidingView>
   
  
       
    );
} 
const {height} = Dimensions.get("screen");
const WINDOW_HEIGHT = Dimensions.get('window').height;
const statusbar= StatusBar.currentHeight;
const styles = StyleSheet.create({
    container: { 
        flex:1,
        //justifyContent:'center',
        //backgroundColor:"#05375a",
        backgroundColor:"grey",
       // alignItems:"center"
      },

      container1: { 
        paddingTop:20,    
        marginTop:60,
        height:600,
        borderTopRightRadius:150,
        backgroundColor:"white",
        flex:1
        
     //flex:1,
      //backgroundColor:"#A9A9A9",
      },
      inner: {

        padding: 24, 
        paddingTop:80,
      },
      header: {
        fontSize: 24,
       marginBottom: 7,
        //color:"dodgerblue"
        color:"black"
      },
      empname: {
        fontSize: 25,
        marginBottom: 50,
        //color:"dodgerblue"
        color:"black"
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
       marginBottom: 30,
        //color:"white"
        color:"black",      
      },
      textInput2:{
        height: 40, 
        borderBottomWidth: 1.3,
        marginBottom: 30,
        //color:"white"
        color:"black",
        borderColor:"dodgerblue",
        marginHorizontal:15,     
      }, 
      btnContainer: {
        backgroundColor: "white",
        marginTop: 12
      },
      button:{
        width:"80%",
        height:50,
        marginHorizontal:"10%",
        marginTop:60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        //borderWidth:2,
       // borderColor:"#2ecc71",
        backgroundColor:"#19456b"
        //backgroundColor: "#1abc9c"
    },
    submitText:{
        color:'#fff',       
       //color:"black"
    }
    ,
  
    closebutton:{
       // alignSelf:"flex-end",
        fontSize:20,
        backgroundColor:"#A9A9A9",
        width:35,
        height:35,
        //alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        
        marginLeft:"81%",
       
       //marginBottom:-15,
       
       
    },
    close:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:19
    },
    });
     

export default AddsalaryScreen;