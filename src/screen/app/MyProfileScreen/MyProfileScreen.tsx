import React from 'react'
import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Icon, Screen } from '@components'

// import { Container } from './styles';

export const MyProfileScreen: React.FC = () => {
	const navigation = useNavigation()
	const navigateToSettings = () => {
		navigation.navigate('SettingsScreen')
	}
	return (
		<Screen>
			<Icon name="settings" onPress={navigateToSettings} />
		</Screen>
	)
}
