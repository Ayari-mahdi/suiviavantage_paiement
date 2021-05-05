import React,{ useEffect, useState }  from 'react';

import {Ionicons} from 'react-native-vector-icons';
import * as Animatable from 'react-native-animatable'
import{Picker} from '@react-native-community/picker'
import { View,Text,StyleSheet,
   FlatList,ActivityIndicator,
   Alert ,Dimensions,StatusBar,
   TextInput,Animated,TouchableHighlight} from 'react-native';
import ListItem  from "./ListItem";
import {Transition,Transitioning} from 'react-native-reanimated';
import react from 'react';
import PaymentResultScreen from "./tests/PaymentResultScreen"

const transition =(
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change/>
    <Transition.Out type="fade" durationMs={200}/>
  </Transition.Together>
)
function paymentScreen  ({numaf,navigation})  {
  const numaft= numaf;
   const ref =react.useRef();
  //const numaf= route.navigation.dangerouslyGetParent().getParam('numaff');
    const [isLoading, setLoading] = React.useState(true);
  
    const [trim,setTrim] = React.useState("1");
    
    const [year,setYear] = React.useState("");
    const [data, setData] = React.useState([]);
   

    const [selectedValue, setSelectedValue] = useState("Karama");

    
const {height} = Dimensions.get("screen");
const statusbar= StatusBar.currentHeight

const height_flatlist = (height-statusbar) *0.624;
  //  const[api,setApi]= useState("http://172.16.17.124:8081/listemployeesperemployer/"+numaf)
    const[api,setApi]= useState("https://reactnative.dev/movies.json")
 // fetch("http://172.16.17.124:8081/listemployeesperemployer/"+numaf )
       // .then((json)=>setData(json) )
   useEffect(() => {  
       fetch(api)
       .then((response) => response.json())
       .then((json)=>setData(json.movies) )     
       .catch((error) => Alert.alert("faileddd","unable to load data check your connection !",  
          [{ text: "OK" }]))
         .finally(() => setLoading(false));
     }, []);

    return (
<View style={styles.container}>
   
 <View style={{flexDirection:"row"}}>
  <View style={{width:"65%",flexDirection:"row"}}>
    <View style={{borderColor:"black",borderWidth:0.4,width:"35%",borderRadius:10,marginLeft:10,backgroundColor:"white",}}>
  <Picker 
  placeholder="TRIM"
        selectedValue={trim}
        style={{  }}
        onValueChange={(itemValue, itemIndex) => setTrim(itemValue)}
        >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
      </Picker>
      </View>
   <TextInput   style={{width:"40%",      borderColor:"black",  
       // height: 50,     
     //   paddingHorizontal:"23%",        
        borderWidth: 0.4,
        //borderBottomWidth:1,
        fontSize:15,
        color:"black",
        backgroundColor:"white",
        borderRadius:10,
        paddingHorizontal:"10%",
        marginHorizontal:"8%",
       // alignItems:"center",
     //  alignSelf:"center"
        //color:"white",     
        
       }}
     placeholderTextColor="grey"
     onChangeText={year=>setYear(year)}
     value={year}
     placeholder="Year"
     maxLength={4}
     keyboardType="numeric" >      
   </TextInput>   
  </View>


  <TouchableHighlight
         style={{backgroundColor:"black",paddingVertical:6,borderRadius:12,alignItems:"center",alignSelf:"center",width:"30%"}}   
         underlayColor='grey'
         onPress={() => {
          
                  fetch("http://172.16.17.124:8081/listemployeesperemployer/"+numaf+"/"+trim+"/"+year)
                 .then((response) => response.json())
                 .then((json)=>setData(json) )
                 
               .catch((error) => Alert.alert("failed","unable to load data check your connection !",  
                [{ text: "OK" }]))
                 .finally(() => setLoading(false));
            }

         }

         >
         <View style={{flexDirection:"row"}}>
         <Text style={{color:"white"}}>Search</Text>
         <Text><Ionicons name='search-outline' color="white"  size={20}/></Text>
         </View>
    </TouchableHighlight>



</View>
<View style={{flexDirection:"row",marginTop:20,marginHorizontal:5,justifyContent:"center",alignItems:"center",width:"30%",marginLeft:"65%"} } >
  
    
  </View>

      <View style={{borderBottomWidth:0.5, padding:8}}></View>
      
        {isLoading ? 
            <View style={styles.loading} > 
            <ActivityIndicator  size="large" color="green"  />
            <Text style={{alignSelf:"center",fontSize:15}} >loading...</Text>
             </View> : (
    
        <Transitioning.View
          ref={ref}
          transition={transition}

          style={{marginBottom:0,height:height_flatlist}}>  


          <FlatList
           data={data}
          // keyExtractor={item => item.ass_mat.toString()}
          keyExtractor={(item,index) => index+""}
           renderItem={({ item,index }) =>(
          
            <Animatable.View animation='fadeInLeftBig' delay={200}>
            <View 
            style= {styles.items1}>      
            <View style= {{...styles.items,borderTopWidth:0}}>   
            <Text style= {styles.txt1}>Saldeclares</Text>
            <Text style= {styles.txt1}>120.000{item.daa_nom}</Text>
            </View>
        
           
            
           </View>

           <View 
            style= {styles.items1}>      
            <View style= {{...styles.items,borderTopWidth:0}}>   
            <Text style= {styles.txt1}>Taux</Text>
            <Text style= {styles.txt1}>{item.daa_nom}</Text>
            </View>
        
           
            
           </View>
            <View 
            style= {styles.items1}>      
            <View style= {{...styles.items,borderTopWidth:0}}>   
            <Text style= {styles.txt1}>Somme final</Text>
            <Text style= {styles.txt1}>{item.daa_nom}</Text>
            </View>
        
           
            <View style={styles.bar2}>
              <Text style={{color:"white"}}>{selectedValue}</Text>
              </View>  
           </View>
           </Animatable.View>
     


             )}
         numColumns={1}
        />        
      </Transitioning.View>
        )}

                  






        <View style={{borderTopWidth:0.2, padding:0}}></View>

 
         </View>)
         
   //******** */      
            
        }
const styles = StyleSheet.create({
items:
      { flexDirection:"row",
        flex:1,
        justifyContent:"center",
        alignItems:"center",      
        //marginVertical:5,
       // borderWidth:1,
      //  borderRadius:20,
        marginHorizontal:5,
        //backgroundColor:"white",  

        
       // height:50         
      },
items2:
      { flexDirection:"column",
      width:"100%",
       flex:3,
        justifyContent:"center",
        alignItems:"flex-start",      
        //marginVertical:5,
       // borderWidth:1,
      //  borderRadius:20,
        marginHorizontal:35,
      
     //   backgroundColor:"white",  


        
       // height:50         
      },
items1:
      { 
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        //borderBottomWidth:1,  
      //  marginVertical:5,
        borderWidth:0.5,
        borderRightWidth:0,
       // borderRadius:20,
      //  marginHorizontal:5,
        backgroundColor:"white",    
      },
container:{
    //backgroundColor:'#05375a',
      flex: 1,     
      paddingVertical:24,
   backgroundColor:"white"
      },
txt:{
      width:"45%",
      textAlign:"right",
        fontSize:20,
        flex:1,
        marginVertical:15,    
        color:'black',
    },
txt1:{
      width:"40%",
      textAlign:"left",
      paddingLeft:20,
      fontSize:20,
     // flex:1,
      marginVertical:15,        
      color:'black',
      
        
    },
txt2:{
      width:"10%",
      textAlign:"right",
      fontSize:20,
      flex:1,
      marginVertical:0,
      marginHorizontal:10,
      color:'green',
    },
loading: {
      flex: 1,
      justifyContent: "center",
       
    },

    bar2 :{   
         backgroundColor:"red",
         width:"100%",alignItems:"center",
        //borderBottomLeftRadius:20,
      //  borderBottomRightRadius:20
      }
        
      }
)
export default paymentScreen;
