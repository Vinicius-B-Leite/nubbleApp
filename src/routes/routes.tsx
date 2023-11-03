import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/auth/Login/Login';
import SingUp from '../screen/auth/SingUp/SingUp';
import Success from '../screen/auth/Success/Success';


export type StackParamsList = {
    Login: undefined
    SingUp: undefined
    Success: undefined
}


const Stack = createNativeStackNavigator<StackParamsList>()

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SingUp' component={SingUp} />
                <Stack.Screen name='Success' component={Success} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;