import React from 'react'
import { View, StyleSheet, Text, Image ,TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable';

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/splash2.png')} />
            <Animatable.Text animation="zoomInUp" style={styles.text}>Welcome to Shopify  </Animatable.Text>
            <View style={styles.text2}>
            <Text style={styles.paragraphe}>Shop & get update on new products and </Text>
            <Text style={styles.paragraphe}>sales with our mobile app </Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('login')}>
                <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={()=>navigation.navigate('register')}>
                <Text style={styles.signupText}>Sign Up </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",

    },
    img: {
        width: "40%",
        height:"20%",
        marginVertical:25

        
    },
    text: {
        fontSize: 33,
        fontWeight:"bold",
        marginVertical:20,
        color:"#333"

    },
    paragraphe:{
        fontSize:19,
        lineHeight:30,
        color:"#333",
        fontWeight:800,
        textAlign:"center"
    },
    loginButton:{
        marginTop:40,
        backgroundColor:"#333",
        width:"60%",
        paddingVertical:22,
        borderRadius:50
    },
    signupButton:{
        marginTop:"10%",
        backgroundColor:"#fff",
        width:"60%",
        borderRadius:50,
        borderColor:"#333",
        borderWidth:2,
        paddingVertical:22,
    
    },
    loginText:{
        color:"#fff",
        fontSize:28,
        textAlign:"center",
        fontWeight:"bold",
    },
    signupText:{
        fontSize:28,
        textAlign:"center",
        marginTop:5,
        fontWeight:"bold",
    },
    text2:{
        marginVertical:30
    }
})