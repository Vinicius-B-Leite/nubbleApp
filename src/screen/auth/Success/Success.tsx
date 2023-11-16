import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Screen, Icon, Text, Button } from '@components'
import { StackParamsList } from '@routes'

type SuccessProps = NativeStackScreenProps<StackParamsList, 'Success'>

export const Success: React.FC<SuccessProps> = ({ route, navigation }) => {
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
