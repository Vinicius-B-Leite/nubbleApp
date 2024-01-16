import React from 'react'
import { Dimensions } from 'react-native'

import { $shadowProps } from '@theme'

import { Box, BoxProps } from '../Box'
import { Icon } from '../Icon/Icon'
import { Text } from '../Text'

const MAX_WIDTH = Dimensions.get('screen').width * 0.9

export const Toast: React.FC = () => {
	return (
		<Box top={100} {...boxStyle}>
			<Icon name="checkRound" color="success" />
			<Text preset="paragraphMedium" style={{ flexShrink: 1 }}>
				Olaasdklasldjaklsjdalkjdklajsdlkjasdlkjasdkljalkdjalkjaslkdjalksjdlaksjdsklajdlkajs
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
