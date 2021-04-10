import React,{ useEffect, useState }  from 'react';
import * as Animatable from 'react-native-animatable'
import {SnackbarComponentProps} from 'react-native-snackbar-component';
import{Picker} from '@react-native-community/picker';
import {FontAwesome} from 'react-native-vector-icons';
import {Entypo} from 'react-native-vector-icons';
import {Ionicons} from 'react-native-vector-icons';
import {MaterialIcons} from 'react-native-vector-icons';
import { ScrollView,View,Text,StyleSheet,
   SafeAreaView,FlatList,ActivityIndicator,
   Alert ,SectionList,MaterialCommunityIcons,
   TouchableHighlight,Dimensions,StatusBar} from 'react-native';

function PaiementScreen({navigation}) 
{

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [selectedValue, setSelectedValue] = useState("SCVP");
    const {height} = Dimensions.get("screen");
    const statusbar= StatusBar.currentHeight
    
    const height_flatlist = (height-statusbar) *0.6; 

    const[api,setApi]= useState("https://reactnative.dev/movies.json")
   useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => Alert.alert("failed","unable to load data check your connection !",  
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]))
        .finally(() => setLoading(false));
    }, []);

    return (
     <Animatable.View 
     animation='fadeInRightBig' 
     style={styles.container}>
        <View style={{padding:15}}>
         <Text style={{fontSize:30,color:"dodgerblue"}}>Employé ajouter</Text>
        </View>
        
      
        {isLoading ? 
            <View style={styles.loading} > 
            <ActivityIndicator size="large" color="green"  />
            <Text style={{alignSelf:"center",fontSize:15}} >loading...</Text>
            </View> : (
          <View style={{flex:1}}>
             <View style={styles.tabheader}>
      <Text style= {{...styles.txt,fontWeight:"bold"}} >CIN</Text>
          <Text style= {{...styles.txt,fontWeight:"bold"}}>Salaire</Text>
      </View>          
            
          
        <View style={{height:height_flatlist}} >        
         <FlatList
         data={data}
         keyExtractor={( item, index) => index+""}
         renderItem={({ item,index }) =>(
            <View style={{...styles.items,backgroundColor: index % 2 == 1 ? "white" : "white"}}>           
            <Text style= {styles.txt}>{item.title}</Text>
            <Text style= {styles.txt}>{item.releaseYear} </Text>
           </View>)
             }
            numColumns={1}
           />  
      </View>
      </View>
    
        )}
     
        <View style={{marginLeft:"65%",marginTop:15,flexDirection:"row"}}> 
        <Text style={{fontSize:20,paddingTop:10,paddingRight:10,color:"black"}}>Ajouter</Text>
        <TouchableHighlight
         style={styles.button}   
         underlayColor='white'
         onPress={()=>navigation.navigate('FormScreen')}  
         >
        <MaterialIcons name='add-box' color="black"  size={50}/>
        </TouchableHighlight>
        </View>
        
         </Animatable.View>)
         
         
            
        }
const styles = StyleSheet.create({

container:{
        //backgroundColor:'#05375a',
        flex: 1, 
        padding: 10,
        
      //  backgroundColor:"white"
 },

items:
      { flexDirection:"row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        //borderWidth:0.5,     
        marginHorizontal:5,
        paddingVertical:5,
        borderColor:"black",
        marginVertical:8,
        borderRadius:20,
        //borderWidth:1,
        shadowColor:"black",
        //shadowRadius:5,
        //shadowOffset:{height:10},
        //shadowOpacity:0.3,
        shadowOffset: { height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 10,
        // background color must be set
        backgroundColor : "#0000"

      },
tabheader:{
      //borderWidth:0.5,
      borderBottomWidth:1,
      //borderTopWidth:1,
      flexDirection:"row",
      // backgroundColor:"#F0FBFC",
    // backgroundColor:"white",
      //borderTopRightRadius:10,
      //borderTopLeftRadius:10,
      justifyContent:"center",
      alignItems:'center',
      paddingVertical:8,
  //borderColor:"white",
  //borderWidth:0.5,
},      
    txt:{
      //  fontSize:20,
    //    flex:1,
       // marginVertical:15,
      //  marginLeft:90,
      width:"50%",
      textAlign:"center",
      fontSize:20,
      marginVertical:5,
      color:"black",
      paddingLeft:10  
    },
   // txt1:{
     //   fontSize:20,
      //  flex:1,
     //   marginVertical:15,
   //     marginRight:30,
    //     
  //  },
    loading: {
        flex: 1,
        justifyContent: "center",   
      },
    button:{
        borderRadius:30
    }  

})
export default PaiementScreen;