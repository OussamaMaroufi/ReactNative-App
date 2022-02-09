import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login';
import Register from '../pages/register';
import Welcome from '../pages/welcom';

const AuthStack = createNativeStackNavigator();


export default function AuthNavigator(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='welcome' component={Welcome}options={{headerShown:false}}/>
            <AuthStack.Screen name='login' component={Login} options={{headerShown:false}} />
            <AuthStack.Screen name='register' component={Register} options={{headerShown:false}} />
        </AuthStack.Navigator>
    )
}