import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator();

export default function Routes(){
    //return null
    return(
        <Stack.Navigator>
           <Stack.Screen
               name="Welcome"
               component={Welcome}
               options={{ headerShown: false }}
           />
           
           <Stack.Screen
               name="SignIn"
               commponent={SignIn}
               options={{ headerShown: false }}
           /> 
        </Stack.Navigator>
    )
}