import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppBottomTabScreenProps } from '@routes'

export const HomeScreen: React.FC<AppBottomTabScreenProps<'HomeScreen'>> = ({ navigation }) => {
	return (
		<Screen>
			<Text>Home Screen</Text>
			<Button title="Navegar" onPress={() => navigation.navigate('SettingsScreen')} />
		</Screen>
	)
}
