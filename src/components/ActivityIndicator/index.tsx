import React from 'react'
import {
	ActivityIndicator as RNActivityIndicator,
	ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'

import { useTheme } from '@shopify/restyle'

import { Theme, ThemeColors } from '@theme'

type ActivityIndicatorProps = RNActivityIndicatorProps & {
	color?: ThemeColors
}
export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
	color = 'primary',
	...rest
}) => {
	const { colors } = useTheme<Theme>()
	return <RNActivityIndicator color={colors[color]} {...rest} />
}
