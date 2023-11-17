import React from 'react'

import { Screen, Icon, Text, Button } from '@components'
import { AuthScreenProps } from '@routes'

export const Success: React.FC<AuthScreenProps<'Success'>> = ({ route, navigation }) => {
	const { description, icon, title } = route.params

	const handleGoBackToBegin = () => {
		navigation.goBack()
	}

	return (
		<Screen>
			<Icon {...icon} />

			<Text mt="s24" preset="headingLarge" bold>
				{title}
			</Text>
			<Text mt="s16" preset="paragraphLarge">
				{description}
			</Text>

			<Button mt="s40" title="Voltar para o início" onPress={handleGoBackToBegin} />
		</Screen>
	)
}
