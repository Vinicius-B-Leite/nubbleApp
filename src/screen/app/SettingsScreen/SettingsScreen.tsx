import React from 'react'

import { useAuthSignOut } from '@domain'

import { Button, Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export const SettingsScreen: React.FC<AppScreenProps<'SettingsScreen'>> = () => {
	const { signOut } = useAuthSignOut()
	return (
		<Screen>
			<Text>Settings Screen</Text>
			<Button title="Sair da conta" onPress={signOut} />
		</Screen>
	)
}
