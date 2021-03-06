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
const transition =(
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change/>
    <Transition.Out type="fade" durationMs={200}/>
  </Transition.Together>
)
function ListingScreen ({numaf,navigation})
 {   
   const numaft= numaf;
   const ref =react.useRef();
  //const numaf= route.navigation.dangerouslyGetParent().getParam('numaff');
    const [isLoading, setLoading] = React.useState(true);
    const [isExpand, setExpand] = React.useState(false);
    const [trim,setTrim] = React.useState("1");
    const [search,setSearch] = React.useState("");
    const [year,setYear] = React.useState("");
    const [data, setData] = React.useState([]);
    const [itemheight,setItemheight] = React.useState(80);
    const [circlename,setCirclename] = React.useState('rightcircle');
    const [circlecolor,setCirclecolor] = React.useState("#505050");

    const [selectedValue, setSelectedValue] = useState("Karama");

    
const {height} = Dimensions.get("screen");
const statusbar= StatusBar.currentHeight

const height_flatlist = (height-statusbar) *0.62;
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

  <View style={{borderColor:"black",borderWidth:0.4,width:110,borderRadius:10,backgroundColor:"white",}}>
      <Picker
        selectedValue={selectedValue}
        style={{  width: 120}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="KARAMA" value="KARAMA" />
        <Picker.Item label="SCV" value="SCV" />
        <Picker.Item label="CIVP" value="CIVP" />
        <Picker.Item label="STARTUP-ACT" value="STARTUP-ACT" />
      </Picker>
  </View>
</View>
<View style={{flexDirection:"row",marginTop:20,marginHorizontal:15} } >
<View style={{width:"75%"}}>
  <TextInput style={{width:"95%",borderColor:"black",
           
        borderWidth:0.3,
       
        fontSize:15,
        color:"black",
       backgroundColor:"#E0E0E0",
        borderRadius:15,
       // fontWeight:"600",
        paddingHorizontal:"10%",
       // marginBottom:10,  
        //alignSelf:"center"  
        marginRight:5,
        paddingVertical:4
       }}
     placeholderTextColor="grey"
     onChangeText={search=>setSearch(search)}
     value={search}
     placeholder="Recherche: nom, matricule"
     
     keyboardType="default" >      
   </TextInput>  
   </View>
     <TouchableHighlight
         style={{width:"25%",backgroundColor:"black",paddingVertical:6,borderRadius:12,alignItems:"center",alignSelf:"center",marginLeft:"0%"}}   
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
           renderItem={({ item,index }) =>{
          
         //  if(search.trim()!=="") { 
          // if (item.daa_nom.toLowerCase()=== search.toLowerCase().trim() ||item.daa_prenom.toLowerCase() === search.toLowerCase().trim()
          // || item.ass_mat=== search.trim()){
          
          
           const x =selectedValue.toString();
         
           return<ListItem item={item} selectedValue={x}  navigation={navigation} index={index}
           animatefun={()=>ref.current.animateNextTransition()}
           onSwipefromleft={()=>navigation.navigate("DetailsScreen",{oneitem:item})}
           onRightPress={()=>navigation.navigate("AddsalaryScreen", {oneitem:item})}
           />     
         // }
       // } 
        if (search.trim()==="")
        {   
          const x =selectedValue.toString();
          
          return<ListItem item={item} key={item} selectedValue={x}  navigation={navigation}
          animatefun={()=>ref.current.animateNextTransition()}
          onSwipefromleft={()=>navigation.navigate("DetailsScreen",{oneitem:item})}
          onRightPress={()=>navigation.navigate("AddsalaryScreen", {oneitem:item})}
          />     
        }


         }}
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
        marginVertical:5,
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:5,
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
    
})
export default ListingScreen;
