import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Box, TouchableOpacityBox, Icon, Text } from '@components'

export type ScreenHeaderProps = {
	canGoBack?: boolean
	title?: string
}

const ICON_SIZE = 20
const ScreenHeader: React.FC<ScreenHeaderProps> = ({ canGoBack, title }) => {
	const navigation = useNavigation()

	return (
		<Box mb="s24" flexDirection="row" alignItems="center" justifyContent="space-between">
			{canGoBack && (
				<TouchableOpacityBox flexDirection="row" alignItems="center" onPress={navigation.goBack}>
					<Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
					{!title && (
						<Text preset="paragraphMedium" semiBold ml="s8">
							Voltar
						</Text>
					)}
				</TouchableOpacityBox>
			)}
			{title && (
				<Text preset="headingSmall" textAlign="center" bold>
					{title}
				</Text>
			)}

			{title && <Box width={ICON_SIZE} />}
		</Box>
	)
}

export default ScreenHeader
