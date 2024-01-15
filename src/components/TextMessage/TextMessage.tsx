import React, { useRef } from 'react'
import { Pressable, TextInput, TextInputProps } from 'react-native'

import { useAppTheme } from '@hooks'

import { Box } from '../Box'
import { $fontFamily, $fontSizes, Text } from '../Text'

type TextMessageProps = TextInputProps & {
	onPressSend: () => void
	value: string
}

export const TextMessage: React.FC<TextMessageProps> = ({ onPressSend, value, ...rest }) => {
	const { colors } = useAppTheme()
	const inputRef = useRef<TextInput>(null)

	const sendButtonIsDisabled = value?.trim().length === 0

	const focusInput = () => inputRef.current?.focus()

	return (
		<Pressable onPressIn={focusInput}>
			<Box
				paddingHorizontal="s16"
				paddingVertical="s14"
				bg="gray5"
				borderRadius="s12"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<TextInput
					ref={inputRef}
					value={value}
					placeholderTextColor={colors.gray2}
					style={{
						flexGrow: 1,
						flexShrink: 1,
						padding: 0,
						fontFamily: $fontFamily.regular,
						...$fontSizes.paragraphMedium,
						color: colors.gray1,
					}}
					{...rest}
				/>
				<Pressable onPress={onPressSend} disabled={sendButtonIsDisabled}>
					<Text color={sendButtonIsDisabled ? 'gray2' : 'primary'} bold>
						Enviar
					</Text>
				</Pressable>
			</Box>
		</Pressable>
	)
}
