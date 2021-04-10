import React from 'react'
import {AntDesign} from 'react-native-vector-icons';
import {MaterialIcons} from 'react-native-vector-icons';
import { ScrollView,View,Text,StyleSheet,
    SafeAreaView,FlatList,ActivityIndicator,
     Alert ,SectionList,Dimensions,StatusBar,TouchableOpacity,
     TextInput,Animated} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

////////////////////////////////////////////
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
        
    });
////////////////////////////////////////////////////
const LeftActions =(progress, dragX) =>{
        const scale = dragX.interpolate({
          inputRange:[0,100],
          outputRange:[0,1],
          extrapolate:'clamp'
        })
          return(
            <View style={{backgroundColor:'green',justifyContent:"center"
            ,borderBottomRightRadius:20,borderTopRightRadius:20,
            marginVertical:5,paddingLeft:5,flex:1,marginRight:5}}>
              <Animated.Text style={[{color:"white",fontWeight:"bold"},{transform:[{scale}]}]}>plus de details </Animated.Text>
              
            </View>
            
          )
        };

   
 
/////////////////////////////////////////////
const ListItem = ({item,selectedValue,onSwipefromleft,onRightPress,navigation})=>
{ //const selectedValue = selectedVal;
   // console.log(item);
    const [isExpand, setExpand] = React.useState(false);
    const [itemheight,setItemheight] = React.useState(80);
    const [circlename,setCirclename] = React.useState('rightcircle');
    const [circlecolor,setCirclecolor] = React.useState("#505050");
    const swipeableRef = React.useRef(null);

    const closeSwipeable = () => {
        swipeableRef.current.close();
      }
////////////////////////////////////////
const RightActions =(progress, dragX) =>{
        const scale = dragX.interpolate({
          inputRange:[-100,0],
          outputRange:[1,0],
          extrapolate:'clamp'
        })
          return(
            <TouchableOpacity onPress={()=>{closeSwipeable();onRightPress()}}>
            <View style={{backgroundColor:'grey',justifyContent:"center",alignItems:"flex-end"
            ,borderBottomLeftRadius:20,borderTopLeftRadius:20,
            marginVertical:5,paddingLeft:5,flex:1,marginLeft:5}}>
              <Animated.Text style={[{color:"white",fontWeight:"bold"},{transform:[{scale}]}]}>ajout salaire </Animated.Text>
    
            </View>
            </TouchableOpacity>
          )
        };    
//////////////

if (item.title !== selectedValue){
           
    return(

<Swipeable renderLeftActions={LeftActions}
           ref={swipeableRef}
           onSwipeableLeftOpen={()=>{closeSwipeable();onSwipefromleft()}}   
           
           renderRightActions={RightActions}
     style={{height:itemheight,backgroundColor:"red"}}>

    <TouchableOpacity style={{height:itemheight}}  onPress={()=>
        { 
        if (itemheight !==250) {setItemheight(250);setExpand(true);setCirclecolor('#dc143c');setCirclename("downcircle")}
        else {setItemheight(80);setExpand(false);setCirclecolor("#505050");setCirclename("rightcircle")}
        }}>
    <View style= {styles.items1}>      
    <View style= {styles.items}>   
    <Text style= {styles.txt1}>{item.title}</Text>
    <Text style= {styles.txt1}>{item.releaseYear} </Text>
    <Text style= {styles.txt2} onPress={()=>{navigation.navigate('DetailsScreen',{oneitem:item})}}><AntDesign name={circlename} color={circlecolor}  size={30}/> </Text>
    </View>
 {isExpand?    
    <View style= {styles.items2}>  
     <View style= {styles.items}> 
    <Text style= {styles.txt1} >id: {item.id}</Text>
    <Text style= {styles.txt1}>America</Text>
   
    </View>
    <View style= {styles.items}> 
    <Text style= {styles.txt1}>imbd: 8.2</Text>
    <Text style= {styles.txt1} >000.000 </Text>

    <Text style= {styles.txt2} onPress={()=>{navigation.navigate('AddsalaryScreen',{oneitem:item})}}><MaterialIcons name='error-outline' color="black"  size={25}/> </Text>

    
      </View>
        </View>
    : <View></View>
     }      
    <View style={{backgroundColor:"#00A572",width:"100%",alignItems:"center",borderBottomLeftRadius:20,borderBottomRightRadius:20}}><Text style={{color:"white"}}>{selectedValue}</Text></View>  
   </View>


   </TouchableOpacity>
</Swipeable>
   )
  }   
} 
export default ListItem;