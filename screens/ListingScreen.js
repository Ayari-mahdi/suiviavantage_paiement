import React,{ useEffect, useState }  from 'react';
import {SnackbarComponentProps} from 'react-native-snackbar-component'
import * as Animatable from 'react-native-animatable'
import{Picker} from '@react-native-community/picker'
import { ScrollView,View,Text,StyleSheet,
  SafeAreaView,FlatList,ActivityIndicator,
   Alert ,SectionList,Dimensions,StatusBar,TouchableOpacity} from 'react-native';
import { getbeneficiaries} from '../rest service/api-service'
//function ListingScreen({navigation}) {
function ListingScreen ({navigation})
 {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [selectedValue, setSelectedValue] = useState("SCVP");

const {height} = Dimensions.get("screen");
const statusbar= StatusBar.currentHeight

const height_flatlist = (height-statusbar) *0.7;
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
      <Animatable.View animation='fadeInRightBig' duration={700} style={styles.container}>
        
  <View style={{borderColor:"black",borderWidth:1,width:150,borderRadius:10,marginLeft:"55%",backgroundColor:"white",}}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150,borderWidth:2,borderColor:"black" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="KARAMA" value="KARAMA" />
        <Picker.Item label="SCVP" value="SCVP" />
        <Picker.Item label="Star Wars" value="Star Wars" />

      </Picker>
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
          if (item.title === selectedValue){
            return(
              <TouchableOpacity onPress={()=>navigation.navigate("DetailsScreen",{oneitem:item})}>
            <View style={styles.items}>           
            <Text style= {styles.txt1}>{item.title}</Text>
            <Text style= {styles.txt}>{item.releaseYear} </Text>
           </View>
           </TouchableOpacity>
           )
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
        //borderBottomWidth:1,  
        marginVertical:5,
        borderWidth:1,
        borderRadius:20,
        marginHorizontal:5,
        backgroundColor:"white"
      },
      container:{
    //backgroundColor:'#05375a',
    flex: 1, 
   paddingVertical:24,
   paddingHorizontal:0,
   
      },
    txt:{
      width:"50%",
      textAlign:"center",
        fontSize:20,
        flex:1,
        marginVertical:15,
        
        color:'black',
    },
    txt1:{
      width:"50%",
      textAlign:"left",
      paddingLeft:20,
        fontSize:20,
        flex:1,
        marginVertical:15,
        
        color:'black',
        
    },
    loading: {
        flex: 1,
        justifyContent: "center",
       
      },
    
})
export default ListingScreen;
