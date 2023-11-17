import React from 'react'

import { Button, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export const HomeScreen: React.FC<AppScreenProps<'HomeScreen'>> = ({ navigation }) => {
	return (
		<Screen>
			<Text>Home Screen</Text>
			<Button title="Navegar" onPress={() => navigation.navigate('SettingsScreen')} />
		</Screen>
	)
}
