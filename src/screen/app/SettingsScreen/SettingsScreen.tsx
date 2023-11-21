import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export const SettingsScreen: React.FC<AppScreenProps<'SettingsScreen'>> = ({ navigation }) => {
	return (
		<Screen>
			<Text>Settings Screen</Text>
			<Button
				title="navegar"
				onPress={() => navigation.navigate('AppTabNavigator', { screen: 'NewPostScreen' })}
			/>
		</Screen>
	)
}
