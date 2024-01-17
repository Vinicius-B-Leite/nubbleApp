import React from 'react'
import { Dimensions } from 'react-native'

import { Toast, ToastType } from '@services'

import { $shadowProps } from '@theme'

import { Box, BoxProps } from '../../Box'
import { Icon, IconProps } from '../../Icon/Icon'
import { Text } from '../../Text'

const MAX_WIDTH = Dimensions.get('screen').width * 0.9

type ToastContentProps = {
	toast: Toast
}
export const ToastContent: React.FC<ToastContentProps> = ({ toast }) => {
	const position = toast?.position || 'top'
	const type = toast?.type || 'success'

	return (
		<Box {...boxStyle} style={{ [position]: 100, ...$shadowProps }}>
			<Icon {...toastMap[type]} />
			<Text preset="paragraphMedium" style={{ flexShrink: 1 }}>
				{toast.message}
			</Text>
		</Box>
	)
}

const toastMap: Record<ToastType, IconProps> = {
	error: {
		name: 'checkRound',
		color: 'redError',
	},
	success: {
		name: 'checkRound',
		color: 'success',
	},
}

const boxStyle: BoxProps = {
	flexDirection: 'row',
	bg: 'carrotSecondary',

	alignItems: 'center',
	p: 's16',
	borderRadius: 's16',
	gap: 's16',
	backgroundColor: 'background',
	opacity: 0.95,
	maxWidth: MAX_WIDTH,
}
