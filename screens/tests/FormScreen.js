import React from 'react';
import * as Animatable from 'react-native-animatable'
import {MaterialIcons} from 'react-native-vector-icons';
import { View,Text,StyleSheet,SafeAreaView,
    ActivityIndicator,TouchableWithoutFeedback,
TextInput,KeyboardAvoidingView,Keyboard,TouchableHighlight, Alert,Dimensions,StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
function FormScreen({navigation}) {
  const [number, onChangeNumber] = React.useState("");
  const [number2, onChangeNumber2] = React.useState("");
  const [number3, onChangeNumber3] = React.useState("");
  const [number4, onChangeNumber4] = React.useState("");
  const [number5, onChangeNumber5] = React.useState("");
  const[isActive,setIsActive] = React.useState(false);
  const[isActive2,setIsActive2] = React.useState(false);
  const[isActive3,setIsActive3] = React.useState(false);
  const[isActive4,setIsActive4] = React.useState(false);
  const[isActive5,setIsActive5] = React.useState(false);
  const customStyle = isActive ? styles.textInput2 : styles.textInput;    
  const customStyle2 = isActive2 ? styles.textInput2 : styles.textInput; 
  const customStyle3 = isActive3 ? styles.textInput2 : styles.textInput;    
  const customStyle4 = isActive4 ? styles.textInput2 : styles.textInput; 
  const customStyle5 = isActive5 ? styles.textInput2: styles.textInput;    
  const [istest,setIstest]=useState("");
  const [istest2,setIstest2]=useState("");
  const [istest3,setIstest3]=useState("");
  const [istest4,setIstest4]=useState("");
  const [istest5,setIstest5]=useState("");
  const [isfirsterror,setIsfirsterror]=useState(false);
    return (

        <KeyboardAvoidingView  
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Animatable.View 
      animation='fadeInUpBig' duration={1000}
     >
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
        <Text style={styles.header}>Formulaire</Text>
        <TextInput placeholder="Cin" 
          onFocus={()=> setIsActive(true)}
          onBlur={()=> {setIsActive(false); if(number.trim()===""){setIstest(true)} else { setIstest(false)}}} 
          onChangeText={onChangeNumber}
          value={number} 
          placeholderTextColor="grey" 
          style={customStyle} />
          
          {istest? 
          <Animatable.Text animation="bounceIn" style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="red"  size={20}/></Animatable.Text>
           : <Animatable.Text animation="fadeOutRight"  style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="dodgerblue"  size={20}/></Animatable.Text>
           } 

        <TextInput placeholder="Matricule" 
          onFocus={()=> setIsActive2(true)}
          onBlur={()=> {setIsActive2(false); if(number2.trim()===""){setIstest2(true)}  else { setIstest2(false)}}} 
          onChangeText={onChangeNumber2}
          value={number2}
           placeholderTextColor="grey" 
           style={customStyle2} />
           
           {istest2? 
             <Animatable.Text animation="bounceIn" style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text>
             : <Animatable.Text animation="fadeOutRight"  style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/></Animatable.Text>
        }
        <TextInput placeholder="Date" 
          onFocus={()=> setIsActive3(true)}
          onBlur={()=> {setIsActive3(false); if(number3.trim()===""){setIstest3(true)}  else { setIstest3(false)}}} 
          onChangeText={onChangeNumber3}
          value={number3}
          placeholderTextColor="grey" 
          style={customStyle3} />
          {istest3? 
            <Animatable.Text animation="bounceIn" style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text>
            : <Animatable.Text animation="fadeOutRight"  style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/></Animatable.Text>
        }
        <TextInput placeholder="Type Contrat" 
          onFocus={()=> setIsActive4(true)}
          onBlur={()=> {setIsActive4(false); if(number4.trim()===""){setIstest4(true)} else { setIstest4(false)}}}
          onChangeText={onChangeNumber4}
          value={number4}
          placeholderTextColor="grey" 
          style={customStyle4} />
          {istest4? 
            <Animatable.Text animation="bounceIn" style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text>
            : <Animatable.Text animation="fadeOutRight"  style={{ color: "red",marginTop:-65,marginLeft:"90%",marginBottom:40 }}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/></Animatable.Text>
        }
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
        <TouchableHighlight
          style={styles.button} 
          underlayColor='#2ecc71'
          onPress={() => {
           if (istest===false && istest2 ===false && istest3 ===false & istest4 ===false && istest5===false)
            {navigation.goBack()} 
            else {
              if(number.trim()===""){setIstest(true)} else { setIstest(false)}
              if(number2.trim()===""){setIstest2(true)} else { setIstest2(false)}
              if(number3.trim()===""){setIstest3(true)} else { setIstest3(false)}
              if(number4.trim()===""){setIstest4(true)} else { setIstest4(false)}
              if(number5.trim()===""){setIstest5(true)} else { setIstest5(false)}
            } 
          }}>
        <Text style={styles.submitText}>Submit
        </Text>
    </TouchableHighlight>
         

        </View>
       
      </TouchableWithoutFeedback>
     
      
      </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  
       
    );
} 
const {height} = Dimensions.get("screen");
const WINDOW_HEIGHT = Dimensions.get('window').height;
const statusbar= StatusBar.currentHeight;
const styles = StyleSheet.create({
    container: {
     
        flex:1,
        justifyContent:'center',
        //backgroundColor:"#05375a",
        
      },
      inner: {
        padding: 24,
        
       
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
        color:"dodgerblue"
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
        //color:"white"
        color:"black",
        
      },
      textInput2:{
        height: 40,
      
        borderBottomWidth: 1.3,
        marginBottom: 36,
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
        marginTop:50,
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
    });
     

export default FormScreen;