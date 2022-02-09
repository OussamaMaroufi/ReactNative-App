import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from "./src/navigators/authNavigator"
import MainNavigator from './src/navigators/mainNavigator';
import Splash from "./src/pages/splash";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='auth' component={AuthNavigator}options={{headerShown:false}} />
        <RootStack.Screen name='splash' component={Splash}  options={{headerShown:false}}/>
        <RootStack.Screen name='main' component={MainNavigator} options={{headerShown:false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


