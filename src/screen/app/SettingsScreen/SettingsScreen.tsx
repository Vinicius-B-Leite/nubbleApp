import React from 'react'

import { Screen, Text } from '@components'
import { AppScreenProps } from '@routes'

export const SettingsScreen: React.FC<AppScreenProps<'SettingsScreen'>> = () => {
	return (
		<Screen>
			<Text>Home Screen</Text>
		</Screen>
	)
}
