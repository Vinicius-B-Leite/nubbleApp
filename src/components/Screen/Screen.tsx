import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

import { Box, BoxProps } from '@components'
import { useAppSafeArea, useAppTheme } from '@hooks'

import ScreenHeader, { ScreenHeaderProps } from './components/ScreenHeader'

type ScreenProps = BoxProps &
	ScreenHeaderProps & {
		children: React.ReactNode
		scrollEnabled?: boolean
	}

export const Screen: React.FC<ScreenProps> = ({
	children,
	canGoBack = false,
	scrollEnabled = false,
	style,
	title,
	...boxProps
}) => {
	const { top, bottom } = useAppSafeArea()
	const { colors } = useAppTheme()

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
					<ScreenHeader canGoBack={canGoBack} title={title} />
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	)
}
