import React from 'react'

import { ActivityIndicator, Text, TouchableOpacityBoxProps, TouchableOpacityBox } from '@components'

import { ButtonPreset, buttonPreset } from './buttonPreset'

type ButtonProps = TouchableOpacityBoxProps & {
	loading?: boolean
	disabled?: boolean
	title: string
	preset?: ButtonPreset
}

export const Button: React.FC<ButtonProps> = ({
	title,
	loading,
	preset = 'primary',
	disabled,
	...rest
}) => {
	const buttonPresetSelected = buttonPreset[preset][disabled ? 'disabled' : 'default']
	return (
		<TouchableOpacityBox
			disabled={disabled || loading}
			height={50}
			alignItems="center"
			justifyContent="center"
			paddingHorizontal="s20"
			borderRadius="s16"
			{...buttonPresetSelected.container}
			{...rest}
		>
			{loading ? (
				<ActivityIndicator color={buttonPresetSelected.content} />
			) : (
				<Text preset="paragraphMedium" bold italic color={buttonPresetSelected.content}>
					{title}
				</Text>
			)}
		</TouchableOpacityBox>
	)
}
