import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import * as Animatable from 'react-native-animatable';


export default function Splash(){
    return(
        <View style={styles.container}>
            <Animatable.Text animation="zoomInUp" style={styles.text}>Welcome ! </Animatable.Text>
            <Image style={styles.img} source={require("../../../assets/splash3.png")}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center"
    },
    text:{
       alignSelf:"center",
       fontSize:40,
       fontWeight:800,
       marginTop:"30%",
       color:"grey"
   
       

    
    },
    img:{
        width:240,
        height:120,
        marginVertical:"30%",
        
    }
})