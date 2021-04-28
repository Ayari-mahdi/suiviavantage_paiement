import React,{ useEffect, useState }  from 'react';
import * as Animatable from 'react-native-animatable'
import {LinearGradient} from 'expo-linear-gradient'
import {MaterialIcons} from 'react-native-vector-icons';
import {StyleSheet,View,Text,
    SafeAreaView,TextInput,Alert,
    TouchableHighlight,
    Platform,StatusBar ,
    KeyboardAvoidingView,TouchableWithoutFeedback,
    Keyboard,ScrollView,ActivityIndicator, Dimensions} from 'react-native';
    import {userDimensions,useDeviceOrientation} from '@react-native-community/hooks';

function WelcomeScreen({ navigation }) 
{
    const [number,setNumber] = React.useState("");
    const [number2,setNumber2] = React.useState("");
    const {landscape} = useDeviceOrientation();
    const [isLoading, setLoading] = React.useState(false);
    const[isActive,setIsActive] = React.useState(false);
    const[isActive2,setIsActive2] = React.useState(false);
    const customStyle = isActive ? styles.input2 : styles.input;    
    const customStyle2 = isActive2 ? styles.input2 : styles.input; 
    const [boxanimation,setBoxaniamtion]  = useState('fadeInUp')
    const [istest,setIstest]=useState();
    const [istest2,setIstest2]=useState();
return (
  <KeyboardAvoidingView   style={styles.container}behavior={Platform.OS === "ios" ? "padding" : null}
  keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0} >
<ScrollView >
  
<TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
<SafeAreaView >
  <View style={styles.header}>
<Animatable.Text animation="fadeInDown" delay={200}
 style={styles.txtlogo}>CNSS</Animatable.Text> 
<Animatable.Image
animation="fadeInDown"
delay={100}
 source={require('../assets/cnss2.png')}
 style={styles.logo}
 resizeMode="contain">
</Animatable.Image>
    
     </View >
     {isLoading ? 
            <View style={styles.loading} > 
            <ActivityIndicator  size="large" color="green"  />
            <Text style={{alignSelf:"center",fontSize:15}} >loading...</Text>
             </View> : (
           <Animatable.View animation={boxanimation} delay={200} 
          >  
     <LinearGradient colors={['#2C5364','#141E30']} style={styles.box} >          
     
     <TextInput style={customStyle }
     
        placeholderTextColor="grey"
        onFocus={()=> setIsActive(true)}
        onBlur={()=> {setIsActive(false);if(number.trim()===""){setIstest(true)} else {setIstest(false)} }}
        onChangeText={number=>setNumber(number)}
        value={number}
        placeholder="NUM AFFILIATION:"
        maxLength={9}
        keyboardType="numeric" >      
     </TextInput>  
     {istest? 
          <Animatable.Text animation='bounceIn'  style={{ color: "red",marginTop:-55,marginBottom:40,marginLeft:"75%" }}> <MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text> 
          : <Animatable.Text animation='fadeOutRight' style={{ color: "red",marginTop:-55,marginBottom:40,marginLeft:"75%" }}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/> </Animatable.Text>
          }
     <TextInput style={customStyle2}
        placeholderTextColor="grey"
        onFocus={()=> setIsActive2(true)}  
        onBlur={()=> {setIsActive2(false);if(number2.trim()===""){setIstest2(true)} else {setIstest2(false)} }}
        onChangeText={number2=>setNumber2(number2)}
        value={number2}
        placeholder="CIN:*******"
        maxLength={8}
        keyboardType="numeric" >
     </TextInput>    
     {istest2? 
          <Animatable.Text animation='bounceIn' style={styles.inputerror}> <MaterialIcons name='error-outline' color="red"  size={22}/></Animatable.Text> 
          : <Animatable.Text animation='fadeOutRight'   style={styles.inputerror}><MaterialIcons name='error-outline' color="dodgerblue"  size={22}/> </Animatable.Text>
          }
     <LinearGradient colors={['#2ecc71','#1abc9c']} style={styles.button}>
       <View>
     <TouchableHighlight
       style={styles.button2} 
       underlayColor='#1abc9c'
       onPress={async() => {
        // navigation.navigate('login',{numaff:number})
        if(number.trim()===""){setIstest(true)}else {setIstest(false)}
        if(number2.trim()===""){setIstest2(true)}else {setIstest2(false)}
        if (istest === false && istest2 === false)
      {


       if ((number.trim()!=="" && number2.trim()!==""))
        {
        
         setLoading(true)
         //////////
        try {
          let employer = await fetch("https://reactnative.dev/movies.json");
          let result = await employer.json();
         // let employer = await fetch("http://172.16.17.124:8081/search_mployer/"+number);
          //let result = await employer.json();

          setLoading(false)
          
          return navigation.navigate('login',{numaff:number})
        }
       catch(error)
        {   
        Alert.alert("failed","enter a correct affiliation number!!! "+ number +" doesnt exist",  
              [{ text: "OK" }]);
              setLoading(false);
              setIstest(true);
              setIstest2(true);
              setNumber("");
              setNumber2("");         
         }
         //////////
    
       }
   //    else{
     //   if(number.trim()===""){setIstest(true)}
     //  if(number2.trim()===""){setIstest2(true)}
     //  }

      else {
        if(number.trim()===""){setIstest(true)} else {setIstest(false)}
        if(number2.trim()===""){setIstest2(true)}else {setIstest2(false)}
       }
      
      }  }}    
       >
        
       <Text style={styles.submitText}>Submit
       </Text>
       
    </TouchableHighlight>  
    </View>
    </LinearGradient>
        
</LinearGradient>
</Animatable.View>  
)}
</SafeAreaView>
</TouchableWithoutFeedback>

</ScrollView>
</KeyboardAvoidingView>
);
}

const {height} = Dimensions.get("screen");
const WINDOW_HEIGHT = Dimensions.get('window').height;
const statusbar= StatusBar.currentHeight
const height_logo = height *0.7 * 0.4 ;
const height_header = (height-statusbar) * 0.4;
const height_box = (height-statusbar) *0.6;
const styles = StyleSheet.create({
  container:{     
    flex:1,
    backgroundColor:"white",
    //backgroundColor:"#05375a",
    justifyContent:"center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,  
    paddingTop:statusbar,   
 },
 header:{ 
   flex:1,
   //marginVertical:20,
   height:height_header,
  // backgroundColor:"#2C5364",
   //borderBottomStartRadius:180,
  // borderBottomRightRadius:180,
 },
  box: {
   ////// ['#2C5364','#141E30']
    //['#373B44','#093637']
    //{['#536976','#292E49']}
   // paddingLeft: 15,
    //paddingRight: 15,
   // borderRadius: 5,
      
    //backgroundColor:"#2c3e50", 
    //backgroundColor:"white",
  
    height:height_box,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    flex:1,
    
    //marginTop:150,
   //zIndex:900,
    //justifyContent:'center'
    //marginHorizontal:10   

    },
    
    logo:{
      alignSelf:"center",
      height:height_logo,
    },  

    txtlogo:{   
      fontStyle:"italic",
      fontSize:36,
      textAlign:"center",  
      fontWeight:"900",
      letterSpacing:10,
      marginTop:10,
    },
   
    input:{   
        width: '70%',  
        borderColor:"#3498db",
        borderRadius:30,
       // borderColor:"black",
        height: 50,
        margin:"5%",
        marginHorizontal: "15%",
        paddingHorizontal:"23%",        
        borderWidth: 1,
       // borderBottomWidth:1,
        fontSize:15,
        //color:"black",
        color:"white",        
    }, 
    input2:{ 
        width:'90%',  
        borderColor:"#2ecc71",
        borderRadius:30,
        height: 50,
        margin:"5%",
        paddingHorizontal:"23%",
        borderWidth: 1,
       // borderBottomWidth:1,
        fontSize:15,
        color:"#fff",
        //color:"black"
    },
    inputerror:{
      color: "red",marginTop:-55,marginBottom:40,marginLeft:"75%"
    },
    button:{
        width:"50%",
        height:50,
        marginHorizontal:"25%",
        marginTop:50,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#2ecc71",  
        //backgroundColor:"black"
    },
    button2:{
      width:180,
      height:50,
      marginHorizontal:"25%",
      borderRadius:30,
      alignItems:"center",
      justifyContent:"center",   
    },
    submitText:{
        //color:'#fff',       
       color:"black"
    },   
})
export default WelcomeScreen;