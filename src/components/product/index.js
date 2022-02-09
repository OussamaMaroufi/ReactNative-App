import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'

export default function Product({name,price}){
    return(
        <View style={styles.container}>
            <Text style={styles.price} >${price}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        height:190,
        backgroundColor:"red",
        marginHorizontal:10,
        width:130,
        paddingHorizontal:10,
        borderRadius:18,
        minWidth:130

    },
    name:{
        color:"grey",
        fontSize:20,
        fontWeight:600,
        
    },
    price:{
        fontSize:16,
        fontWeight:550,
     
    }
})