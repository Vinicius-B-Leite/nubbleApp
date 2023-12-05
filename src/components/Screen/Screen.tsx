import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Icon, Text, Box, TouchableOpacityBox, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

type ScreenProps = BoxProps & {
	children: React.ReactNode
	canGoBack?: boolean
	scrollEnabled?: boolean
}

export const Screen: React.FC<ScreenProps> = ({
	children,
	canGoBack = false,
	scrollEnabled = false,
	style,
	...boxProps
}) => {
	const { top, bottom } = useAppSafeArea()
	const { colors } = useAppTheme()
	const navigation = useNavigation()

	const Container = scrollEnabled ? ScrollView : View

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			style={{ flex: 1 }}
		>
			<Container
				keyboardShouldPersistTaps="handled"
				scrollEnabled={scrollEnabled}
				style={{ backgroundColor: colors.background, flex: 1 }}
			>
				<Box
					paddingHorizontal="s24"
					style={[{ paddingTop: top, paddingBottom: bottom }, style]}
					{...boxProps}
				>
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
			</Container>
		</KeyboardAvoidingView>
	)
}
