import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration';
import Login from './Login';
import Service from './Service';
import Ireland from './Ireland';
import Dublin from './Dublin';
import Griffith from './Griffith';
import IOT from './IOT';
import Techno from './Techno';
import TCD from './TCD';
import Maynooth from './Maynooth';
import Apply from './Apply';
//import { Header } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown : false}} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown : false}} />
        <Stack.Screen name='Service' component={Service} options={{ headerShown : false}} />
        <Stack.Screen name='Ireland' component={Ireland} options={{ headerShown : false}} />
        <Stack.Screen name='Dublin' component={Dublin} options={{ headerShown : false}} />
        <Stack.Screen name='Griffith' component={Griffith} options={{ headerShown : false}} />
        <Stack.Screen name='IOT' component={IOT} options={{ headerShown : false}} />
        <Stack.Screen name='Maynooth' component={Maynooth} options={{ headerShown : false}} />
        <Stack.Screen name='TCD' component={TCD} options={{ headerShown : false}} />
        <Stack.Screen name='Techno' component={Techno} options={{ headerShown : false}} />
        <Stack.Screen name='Apply' component={Apply} options={{ headerShown : false}} />


       </Stack.Navigator>
    </NavigationContainer>
  )
  
}