import React from 'react';
import {AntDesign} from 'react-native-vector-icons';
import {MaterialIcons} from 'react-native-vector-icons';
import {Ionicons} from 'react-native-vector-icons';
import * as Animatable from 'react-native-animatable'
import {StyleSheet,View,Text,
    SafeAreaView,TextInput,Alert,
    TouchableHighlight,
    Image,Platform,StatusBar ,
    KeyboardAvoidingView,TouchableWithoutFeedback,
    Keyboard,ScrollView,ActivityIndicator, Dimensions,bottom,TouchableOpacity} from 'react-native';
function DetailsScreen({route,navigation}) {
    const data = route.params.oneitem;
    return (
        <View style={styles.container}>
            
       <Animatable.View animation="fadeInUpBig" style={{ flexDirection:"column-reverse"}} >
           <View style={styles.detailslist}> 
          
           <Text style={styles.title}>Détails de l'employé</Text>
           
           <Text style={{borderTopWidth:2,borderRadius:10,width:"75%",alignSelf:"center",marginBottom:10}}></Text>
           <ScrollView>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-ID :</Text>
            <Text style= {styles.txt2}>{data.id} </Text>
           </View>
           
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-Title :</Text>
            <Text style= {styles.txt2}>{data.title} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-Release Year :</Text>
            <Text style= {styles.txt2}>{data.releaseYear} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-Salaire :</Text>
            <Text style= {styles.txt2}>000.000
            <Text style= {{paddingLeft:20}} onPress={()=>{navigation.navigate('AddsalaryScreen',{oneitem:data})}}><Ionicons name='add-circle' color="grey"  size={38}/> </Text>

             </Text> 
            
           </View>

        
           </ScrollView>
           </View >
           <TouchableOpacity style={styles.closebutton}  onPress={()=>navigation.goBack()}>
                     
            <Text style= {styles.close}> <AntDesign name='closecircle' color="black"  size={35}/> </Text>
           
        
           </TouchableOpacity>
           </Animatable.View>
           <Animatable.Text animation="fadeInDown" duration={5500}
duration={1500} style={styles.txtlogo}>Suivi Avantage</Animatable.Text>
           </View>
    );
}
const {height} = Dimensions.get("screen");
const WINDOW_HEIGHT = Dimensions.get('window').height;
const statusbar= StatusBar.currentHeight
const height_logo = height *0.7 * 0.4 ;

const height_box = (height-statusbar) *0.8;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#05375a",
        flexDirection:"column-reverse",
        paddingTop:statusbar, 
    },
  txtlogo:{   
      fontStyle:"italic",
      fontSize:30,
      textAlign:"center",  
      fontWeight:"900",
      letterSpacing:10,
      marginBottom:50,
      color:'white'
    },
    detailslist:{     
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        height:height_box,
        backgroundColor:"white",
        //backgroundColor:"#05375a",
        justifyContent:'flex-start',
        alignItems:'center',
        
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,        
    },  
    title:{
        color:'dodgerblue',
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',
        paddingLeft:5,
        letterSpacing:3,
        marginTop:80
    },
    items:
    { flexDirection:"row",
    
      borderBottomWidth:1,
      marginHorizontal:20,
      justifyContent:"center",
      alignItems:"center",
      
    },
    txt:{
        width:"50%",
        fontSize:20,
        margin:6,
        fontWeight:'bold',
        paddingLeft:20,
        marginBottom:20
    },
    txt2:{
        width:"50%",
        fontSize:20,
        margin:6,
        
        paddingLeft:10,
        marginBottom:20
    },
  
    closebutton:{
        alignSelf:"center",
        fontSize:20,
        backgroundColor:"#A9A9A9",
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        marginBottom:-15,
       
    },
    close:{
        fontWeight:'bold',
        fontSize:15,
        marginBottom:20
    },
 
})
export default DetailsScreen;