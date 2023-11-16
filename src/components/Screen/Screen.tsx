import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Icon, Text, Box, TouchableOpacityBox } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

type ScreenProps = {
	children: React.ReactNode
	canGoBack?: boolean
	scrollEnabled?: boolean
}

export const Screen: React.FC<ScreenProps> = ({
	children,
	canGoBack = false,
	scrollEnabled = false,
}) => {
	const { top, bottom } = useAppSafeArea()
	const { colors } = useAppTheme()
	const navigation = useNavigation()

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			style={{ flex: 1 }}
		>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				scrollEnabled={scrollEnabled}
				style={{ backgroundColor: colors.background, flex: 1 }}
			>
				<Box paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
					{canGoBack && (
						<TouchableOpacityBox mb="s24" flexDirection="row" onPress={navigation.goBack}>
							<Icon name="arrowLeft" color="primary" />
							<Text preset="paragraphMedium" semiBold ml="s8">
								Voltar
							</Text>
						</TouchableOpacityBox>
					)}
					{children}
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	)
}
