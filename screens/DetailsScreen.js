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
            
       <Animatable.View animation="fadeInUpBig" delay={250} style={{ flexDirection:"column-reverse"}} >
           <View style={styles.detailslist}> 
          
           <Text style={styles.title}>Détails de l'employé</Text>
           
           <Text style={{borderTopWidth:2,borderRadius:10,width:"75%",alignSelf:"center",marginBottom:10}}></Text>
           <ScrollView style={{width:"100%",backgroundColor:"white",borderRadius:20}}>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-nom :</Text>
            <Text style= {styles.txt4}>{data.daa_nom} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-prenom :</Text>
            <Text style= {styles.txt4}>{data.daa_prenom} </Text>
           </View>
          
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>- assuree mat :</Text>
            <Text style= {styles.txt4}>{data.ass_mat} </Text>
           </View>
           
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-employeur mat :</Text>
            <Text style= {styles.txt4}>{data.emp_mat} </Text>
           </View>
           
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-date debut :</Text>
            <Text style= {styles.txt4}>{data.daa_dtdeb} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-date fin :</Text>
            <Text style= {styles.txt4}>{data.daa_dtfin} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-date creation :</Text>
            <Text style= {styles.txt4}>{data.daa_dtsais} </Text>
           </View>
           <View style={{...styles.items}}>           
            <Text style= {styles.txt}>-Salaire :</Text>
            <Text style= {styles.txt3}>{data.daa_salaire} </Text> 
            <Text style= {styles.txt2} onPress={()=>{navigation.navigate('AddsalaryScreen',{oneitem:data})}}><Ionicons name='add-circle' color="grey"  size={38}/> </Text>

            
            
           </View>

        
           </ScrollView>
           <View style={{height:30}}><Text></Text></View>
           </View >
           <TouchableOpacity style={styles.closebutton}  onPress={()=>navigation.goBack()}>
                     
            <Text style= {styles.close}> <AntDesign name='closecircle' color="black"  size={35}/> </Text>
           
        
           </TouchableOpacity>
           </Animatable.View>
           <Animatable.Text animation="fadeInDown" 
delay={200} style={styles.txtlogo}>Suivi Avantage</Animatable.Text>
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
        backgroundColor:"#E0E0E0",
       // backgroundColor:"green",
        justifyContent:'flex-start',
        alignItems:'center',
        
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight :0,        
    },  
    title:{
        color:'dodgerblue',
        fontSize:22,
        marginBottom:10,
        fontWeight:'bold',
        paddingLeft:5,
        letterSpacing:3,
        marginTop:60
    },
    items:
    { flexDirection:"row",
      //width:"100%",
     flex:1,
      borderTopWidth:1,
      marginHorizontal:10,
      
  // marginRight:20,
      justifyContent:"center",
      alignItems:"center",
      
    },
    txt:{
        width:"40%",
        fontSize:20,
        margin:6,
        
        paddingLeft:20,
        marginBottom:20,
       
    },
    txt4:{
        width:"60%",
        fontSize:20,
        margin:6,
        fontWeight:'bold',
        paddingLeft:20,
        marginBottom:20,
      
    },
    txt3:{
        width:"45%",
        fontSize:20,
        margin:6,
        fontWeight:'bold',
        paddingLeft:20,
        marginBottom:20,
      
      },
    txt2:{
        width:"15%",
       paddingBottom:15,
        
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