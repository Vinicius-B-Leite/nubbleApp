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
	return <RNActivityIndicator testID="activity-indicator" color={colors[color]} {...rest} />
}
