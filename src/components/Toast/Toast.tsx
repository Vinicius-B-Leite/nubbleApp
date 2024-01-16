import React, { useEffect } from 'react'
import { Dimensions } from 'react-native'

import { useToast, useToastService } from '@services'

import { $shadowProps } from '@theme'

import { Box, BoxProps } from '../Box'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text'

const MAX_WIDTH = Dimensions.get('screen').width * 0.9
const DEFAULT_DURATION = 1500

export const Toast: React.FC = () => {
	const toast = useToast()
	const { hideToast } = useToastService()
	useEffect(() => {
		if (toast) {
			setTimeout(() => {
				hideToast()
			}, toast?.duration || DEFAULT_DURATION)
		}
	}, [hideToast, toast])

	if (!toast) {
		return null
	}

	return (
		<Box top={100} {...boxStyle}>
			<Icon name="checkRound" color="success" />
			<Text preset="paragraphMedium" style={{ flexShrink: 1 }}>
				{toast.message}
			</Text>
		</Box>
	)
}

const boxStyle: BoxProps = {
	position: 'absolute',
	flexDirection: 'row',
	bg: 'carrotSecondary',
	alignSelf: 'center',
	alignItems: 'center',
	p: 's16',
	borderRadius: 's16',
	gap: 's16',
	backgroundColor: 'background',
	style: { ...$shadowProps },
	opacity: 0.95,
	maxWidth: MAX_WIDTH,
}
