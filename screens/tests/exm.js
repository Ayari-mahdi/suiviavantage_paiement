import React,{ useEffect, useState ,PureComponent}  from 'react';
import {AntDesign} from 'react-native-vector-icons';
import {MaterialIcons} from 'react-native-vector-icons';
import { View,Text,StyleSheet,TouchableOpacity
        ,Animated,TouchableWithoutFeedback,Easing} from 'react-native';

import * as Animatable from 'react-native-animatable'
import Swipeable from 'react-native-gesture-handler/Swipeable';


////////////////////////////////////////////
const styles = StyleSheet.create({
    items:
          { flexDirection:"row",
            flex:1,
            justifyContent:"center",
            alignItems:"center",                
            marginHorizontal:5,  
            borderTopWidth:0.5,
            borderColor:"black"             
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
          overflow:"hidden"
          // backgroundColor:"blue",  
         //  borderTopWidth:0.5,
          // borderColor:"black"
    
            
           // height:50         
          },
    items1:
          { 
            
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            //borderBottomWidth:1,  
            marginVertical:5,
            borderWidth:0.4,
            borderRadius:20,
            marginHorizontal:5,
            backgroundColor:"white",  
            shadowColor:"#7F5df0",
            shadowOffset:{
              width:0,
              height:10,
            },
            shadowOpacity:0.25,
            shadowRadius:3.2,
            elevation:5, 
            overflow:"hidden"
          },
    container:{
        //backgroundColor:'#05375a',
          flex: 1, 
          paddingVertical:24,
          paddingHorizontal:0,
       
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

txt4:{
          width:"60%",
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
              <Animated.Text style={[{color:"white",fontWeight:"bold"},{transform:[{scale}]}]}>Plus de details </Animated.Text>
              
            </View>
            
          )
        };
//////////////////////////////////////////////////
       
/////////////////////////////////////////////
const exm = ({item,selectedValue,onSwipefromleft,onRightPress,navigation,animatefun,index})=>
{ //const selectedValue = selectedVal;
   // console.log(item);
   const animatedvalue = React.useRef(new Animated.Value(0)).current;
    const [currentIndex,setCurrentIndex]=React.useState(null);
    const [isExpand, setExpand] = React.useState(false);
    const [itemheight,setItemheight] = React.useState(80);
    const [circlename,setCirclename] = React.useState('rightcircle');
    const [circlecolor,setCirclecolor] = React.useState("#505050");
    const swipeableRef = React.useRef(null);
    const [indexan,setIndexan]=React.useState(0);
    const [indexan2,setIndexan2]=React.useState(0);
    const opacity = React.useRef(new Animated.Value(1)).current ;
    const height   = React.useRef(new Animated.Value(0)).current;
//**************** */
   // state = { opacity: new Animated.Value(0), height: new Animated.Value(0) };

   const animation2 = (toValue)=>
      Animated.timing(height, {
        toValue,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false  // <-- neccessary
      });
//******** */

    const maxHeight = height.interpolate({ 
      inputRange: [0,0.20,0.40,0.60,0.80,1], 
      outputRange: [0,50,100,150,200, 250]  // <-- value that larger than your content's height
    });
//*************** */
const showContent =()=>{
  setIndexan2(indexan2 === 1 ? 0 : 1)
animation2(indexan2 === 1 ? 0 : 1).start()
};
//************** */
const animation = (toValue)=>
    Animated.timing(animatedvalue,{
      toValue,   
      duration:800,
      useNativeDriver:false
    })

 ///////////////////   
const onPress =()=>{
  setIndexan(indexan=== -1 ? 0 : -1)
animation(indexan=== -1 ? 0 : -1).start(),setCirclecolor(circlecolor);
};
///////////////////
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
              <Animated.Text style={[{color:"white",fontWeight:"bold"},{transform:[{scale}]}]}>Ajout salaire </Animated.Text>
    
            </View>
            </TouchableOpacity>
          )
        };    
//////////////

if (item.title !== selectedValue){
 // if(item.daa_agent === 66324){    
  

 

    return(
  
<Swipeable renderLeftActions={LeftActions}
           ref={swipeableRef}
           onSwipeableLeftOpen={()=>{closeSwipeable();onSwipefromleft()}}   
           
           renderRightActions={RightActions}
     style={{}}>

    <TouchableWithoutFeedback style={{flex:1}}  onPress={()=>
        {  onPress();
           showContent();
           
          setCurrentIndex(index === currentIndex ? null : index);
          if (index !== currentIndex) {setCirclecolor('#dc143c')}
          else {setCirclecolor("#505050")}
        }}>

    <View 
    style= {styles.items1}>      
    <View style= {{...styles.items,borderTopWidth:0}}>   
    <Text style= {styles.txt1}>{item.daa_prenom}</Text>
    <Text style= {styles.txt1}>{item.daa_nom}</Text>
     
        
    <Animated.View
    style={{transform:[
      {
        rotateZ:animatedvalue.interpolate({
          inputRange:[0,0.5,1],
          outputRange:['0deg','-45deg','-90deg']
        })
      
       }
      ]
    }}><Text  style= {{}}  onPress={()=>
        { onPress();
        
          setCurrentIndex(index === currentIndex ? null : index);
        if (index !== currentIndex) {setItemheight(250);setExpand(true);setCirclecolor('#dc143c')}
        else {setItemheight(80);setExpand(false);setCirclecolor("#505050")}
        }}>
          <AntDesign name={circlename} color={circlecolor}  size={30}/> </Text>
   </Animated.View>  

    </View>
  
 
    <Animatable.View animation="fadeInUpBig" style= {styles.items2}>  
     <Animated.View
    
     style={{ opacity: opacity, maxHeight: maxHeight }}>
     <View style= {styles.items}> 
    <Text style= {styles.txt1} >Date debut :</Text>
    <Text style= {styles.txt4} >{item.daa_dtdeb}</Text>
    </View>
    <View style= {styles.items}> 
    <Text style= {styles.txt1}>Date fin :</Text>
    <Text style= {styles.txt4}>{item.daa_dtfin}</Text>
    </View>
    <View style= {styles.items}> 
    <Text style= {styles.txt1}>Mat :</Text>
    <Text style= {styles.txt4}> {item.ass_mat}</Text>
    </View>
    <View style= {styles.items}> 
    <Text style= {styles.txt1} >Salaire : </Text>
    <Text style= {styles.txt1} >{item.daa_salaire}</Text>
    <Text style= {styles.txt2} onPress={()=>{navigation.navigate('AddsalaryScreen',{oneitem:item})}}><MaterialIcons name='error-outline' color="black"  size={25}/> </Text>
      </View> 
    

    
      </Animated.View>
        </Animatable.View>
       
 
   
    <View style={{backgroundColor:"#00A572",width:"100%",alignItems:"center",
    borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
      <Text style={{color:"white"}}>{selectedValue}</Text></View>  
   </View>


   </TouchableWithoutFeedback>
</Swipeable>

   )
  }   
} 
export default exm;