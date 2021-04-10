import React,{ useEffect, useState }  from 'react';
import {SnackbarComponentProps} from 'react-native-snackbar-component'
import {MaterialIcons} from 'react-native-vector-icons';
//import {GestureHandler} from 'expo';
import Swipeable from 'react-native-gesture-handler/Swipeable';
//const{Swipeable} = GestureHandler;
import * as Animatable from 'react-native-animatable'
import {AntDesign} from 'react-native-vector-icons';
import{Picker} from '@react-native-community/picker'
import { ScrollView,View,Text,StyleSheet,
  SafeAreaView,FlatList,ActivityIndicator,
   Alert ,SectionList,Dimensions,StatusBar,TouchableOpacity,
   TextInput,Animated} from 'react-native';
import { getbeneficiaries} from '../rest service/api-service'
import DetailsScreen from './DetailsScreen';
//function ListingScreen({navigation}) {
import ListItem  from "./ListItem";
import { List } from 'react-native-paper';
import { render } from 'react-dom';

  
   


function ListingScreen ({numaf,navigation})
 {   const numaft= numaf;
      

 
  //const numaf= route.navigation.dangerouslyGetParent().getParam('numaff');
    const [isLoading, setLoading] = React.useState(true);
    const [isExpand, setExpand] = React.useState(false);
    const [trim,setTrim] = React.useState("");
    const [year,setYear] = React.useState("2021");
    const [data, setData] = React.useState([]);
    const [itemheight,setItemheight] = React.useState(80);
    const [circlename,setCirclename] = React.useState('rightcircle');
    const [circlecolor,setCirclecolor] = React.useState("#505050");

    const [selectedValue, setSelectedValue] = useState("Star Wars");

    
const {height} = Dimensions.get("screen");
const statusbar= StatusBar.currentHeight

const height_flatlist = (height-statusbar) *0.7;
    const[api,setApi]= useState("https://reactnative.dev/movies."+numaf)

   useEffect(() => {
      fetch(api)
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => Alert.alert("failed","unable to load data check your connection !",  
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]))
        .finally(() => setLoading(false),console.log(numaf));
    }, []);

    return (
<Animatable.View animation='fadeInRightBig' duration={700} style={styles.container}>
 <View style={{flexDirection:"row"}}>
  <View style={{width:"65%",flexDirection:"row"}}>
    <View style={{borderColor:"black",borderWidth:1,width:"35%",borderRadius:10,marginLeft:10,backgroundColor:"white",}}>
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
        borderWidth: 1,
        borderBottomWidth:1,
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
     keyboardType="default" >      
   </TextInput>   
  </View>

  <View style={{borderColor:"black",borderWidth:1,width:110,borderRadius:10,backgroundColor:"white",}}>
      <Picker
        selectedValue={selectedValue}
        style={{  width: 120}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="KARAMA" value="KARAMA" />
        <Picker.Item label="SCVP" value="SCVP" />
        <Picker.Item label="Star Wars" value="Star Wars" />
      </Picker>
  </View>
</View>


      <View style={{borderBottomWidth:1, padding:10}}></View>
      
        {isLoading ? 
            <View style={styles.loading} > 
            <ActivityIndicator  size="large" color="green"  />
            <Text style={{alignSelf:"center",fontSize:15}} >loading...</Text>
             </View> : (
               
        <View style={{marginBottom:10,height:height_flatlist}}>        
          <FlatList
         data={data}
         keyExtractor={({ id }, index) => id}
         
         renderItem={({ item }) =>{
          if (item.title !== selectedValue){
          const x =selectedValue.toString();
           
           return<ListItem item={item} selectedValue={x}  navigation={navigation}
           onSwipefromleft={()=>navigation.navigate("DetailsScreen",{oneitem:item})}
           onRightPress={()=>navigation.navigate("AddsalaryScreen", {oneitem:item})}
           />
          }
         }}
         numColumns={1}
        />        
      </View>
        )}
        
         </Animatable.View>)
         
         
            
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
      paddingHorizontal:0,
   
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
