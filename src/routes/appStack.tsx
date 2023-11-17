import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen, SettingsScreen } from '@screens'

export type AppStackParamsList = {
	HomeScreen: undefined
	SettingsScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamsList>()

const AppStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
		</Stack.Navigator>
	)
}

export default AppStack
