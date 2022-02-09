import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,TouchableWithoutFeedback,TextInput,Keyboard} from 'react-native'

export default function Register({navigation}){
    
    return(
        <View style={styles.container}>
            
            {/* <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}> */}
            <Text style={styles.headerText}>Create an account </Text>
    
                    <TextInput 
                        style={styles.input}
                        textContentType='text'
                        placeholderTextColor={'#333'}
                        placeholder='Full name'
                    

                    />
                    <TextInput
                        style={styles.input}
                        textContentType='telephoneNumber'
                        keyboardType='phone-pad'
                        placeholderTextColor={'#333'}
                        placeholder={'Phone Number'}
                    />

                    <TextInput
                        style={styles.input}
                        textContentType='telephoneNumber'
                        keyboardType='phone-pad'
                        placeholderTextColor={'#333'}
                        placeholder={'Email Adress'}
                    />
                    <TextInput
                        style={styles.input}
                        textContentType='password'
                        placeholderTextColor={'#333'}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomTextContainer} onPress={()=>navigation.navigate('login')}>
                    <Text style={styles.bottomText}>I have  an Account </Text>
                    </TouchableOpacity>
                    
          
        
        {/* </TouchableWithoutFeedback> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#fff"
        
       
    },
    headerText:{
        fontSize:30,
        alignSelf:"flex-start",
        marginVertical:20,
        marginLeft:15,
        fontWeight:800
    },

    input:{
        width:"20%",
        backgroundColor:"lightgrey",
        width:"80%",
        marginTop:30,
        height:60,
        borderRadius:60,
        paddingHorizontal:10,
        fontSize:20,
        outlineStyle: 'none'
    },
    text:{
        textAlign:"center",
        color:"#fff",
        fontWeight:"800",
        fontSize:24

    },
    signupButton:{
       borderRadius:60,
       backgroundColor:"#333" ,
       marginTop:60,
       width:"80%",
       paddingVertical:"3%"
    },
    bottomText:{
        fontSize:20,
        fontWeight:800,
        color:"#155CA3"
    },
    bottomTextContainer:{
        marginVertical:"6%"
    }
})