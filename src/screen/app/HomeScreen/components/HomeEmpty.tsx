import React from 'react'

import { ActivityIndicator, Box, Text } from '@components'

type HomeEmptyProps = {
	isLoading: boolean
	error: unknown
}

const HomeEmpty: React.FC<HomeEmptyProps> = ({ error, isLoading }) => {
	let component = (
		<Text bold preset="paragraphMedium">
			Não há publicações no seu feed
		</Text>
	)
	if (isLoading) {
		component = <ActivityIndicator color="primary" />
	}

	if (error) {
		component = (
			<Text bold preset="paragraphMedium">
				Não foi possível carregar publicações
			</Text>
		)
	}

	return (
		<Box flex={1} justifyContent="center" alignItems="center">
			{component}
		</Box>
	)
}

export default HomeEmpty
