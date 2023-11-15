import { ForgetPassword, Login, SingUp, Success } from '@screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IconProps } from '@components';


export type StackParamsList = {
    Login: undefined
    SingUp: undefined
    Success: {
        title: string,
        description: string,
        icon: Pick<IconProps, 'name' | 'color'>
    },
    ForgetPassword: undefined
}


const Stack = createNativeStackNavigator<StackParamsList>()

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SingUp' component={SingUp} />
                <Stack.Screen name='Success' component={Success} />
                <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;