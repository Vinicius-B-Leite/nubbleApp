import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IconProps } from '@components'
import { ForgetPassword, Login, SingUp, Success } from '@screens'

export type AuthParamsList = {
	Login: undefined
	SingUp: undefined
	Success: {
		title: string
		description: string
		icon: Pick<IconProps, 'name' | 'color'>
	}
	ForgetPassword: undefined
}

const Stack = createNativeStackNavigator<AuthParamsList>()

const AuthStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SingUp" component={SingUp} />
			<Stack.Screen name="Success" component={Success} />
			<Stack.Screen name="ForgetPassword" component={ForgetPassword} />
		</Stack.Navigator>
	)
}

export default AuthStack
