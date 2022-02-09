import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'


export default function Category({name}){
    return(
       <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTitle}>{name}</Text>
       </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    item:{
        marginHorizontal:4,
        width:198,
        height:90,
        backgroundColor:"cyan",
        marginTop:11,
        borderRadius:10

    },
    itemTitle:{
        textAlign:"center",
        paddingTop:30,
        fontSize:30,
        fontWeight:"bold",
        color:"#fff"
    }
})