import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen, FavoriteScreen, MyProfileScreen, NewPostScreen } from '@screens'

import AppTabBar from './component/AppTabBar'

export type AppTabParamsList = {
	HomeScreen: undefined
	NewPostScreen: undefined
	FavoriteScreen: undefined
	MyProfileScreen: undefined
}
const Tab = createBottomTabNavigator<AppTabParamsList>()

export function AppTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <AppTabBar {...props} />}
		>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen name="NewPostScreen" component={NewPostScreen} />
			<Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
			<Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
		</Tab.Navigator>
	)
}
