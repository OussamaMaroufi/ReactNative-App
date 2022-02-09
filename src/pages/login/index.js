import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput, Keyboard } from 'react-native'

export default function Login({navigation}) {

    return (
        <View style={styles.container}>

            {/* <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}> */}
                <Text style={styles.headerText}>Sign In </Text>

                <TextInput
                    style={styles.input}
                    textContentType='text'
                    placeholderTextColor={'#333'}
                    placeholder='Email or phone number'


                />
         
                <TextInput
                    style={styles.input}
                    textContentType='password'
                    placeholderTextColor={'#333'}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.text}>Log In</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>
                    OR
                </Text>

                <TouchableOpacity style={styles.fbButtonContainer}>
                    <Text style={styles.fbText}>Facebook Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTextContainer} onPress={()=>navigation.navigate('register')} >
                    <Text style={styles.bottomText}>I don't have  an Account </Text>
                </TouchableOpacity>

            {/* </TouchableWithoutFeedback> */}




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"


    },
    headerText: {
        fontSize: 30,
        alignSelf: "flex-start",
        marginVertical: 20,
        marginLeft: 15,
        fontWeight: 800
    },

    input: {
        width: "20%",
        backgroundColor: "lightgrey",
        width: "80%",
        marginTop: 30,
        height: 60,
        borderRadius: 60,
        paddingHorizontal: 10,
        fontSize: 20,
        outlineStyle: 'none'
    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "800",
        fontSize: 24

    },
    signupButton: {
        borderRadius: 60,
        backgroundColor: "#333",
        marginTop: 60,
        width: "80%",
        paddingVertical: "3%"
    },
    bottomText: {
        fontSize: 20,
        fontWeight: 800,
        color: "#155CA3"
    },
    bottomTextContainer: {
        marginVertical: "6%"
    },
    fbButtonContainer:{
        borderRadius: 60,
        backgroundColor: "#155CE3",
        marginTop: 45,
        width: "80%",
        paddingVertical: "3%"
    },
    fbText:{
        textAlign:"center",
        color:"#fff",
        fontSize:20,
        fontWeight:800
    },
    orText:{
        fontSize:21,
        fontWeight:700,
        color:"#333",
        marginTop:28
    }
})