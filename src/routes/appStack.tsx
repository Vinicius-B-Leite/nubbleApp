import React from 'react'

import { NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PostCommentScreen, ProfileScreen, SettingsScreen } from '@screens'

import { AppTabNavigator, AppTabParamsList } from './AppTabNavigator'

export type AppStackParamsList = {
	AppTabNavigator: NavigatorScreenParams<AppTabParamsList>
	SettingsScreen: undefined
	PostCommentScreen: {
		postId: number
		postAuthorId: number
	}
	ProfileScreen: {
		userId: number
	}
}

const Stack = createNativeStackNavigator<AppStackParamsList>()

const AppStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
			<Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
			<Stack.Screen name="SettingsScreen" component={SettingsScreen} />
			<Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
		</Stack.Navigator>
	)
}

export default AppStack
