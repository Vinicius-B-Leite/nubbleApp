import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import {
	BackgroundColorProps,
	BorderProps,
	LayoutProps,
	SpacingProps,
	SpacingShorthandProps,
	backgroundColor,
	border,
	createBox,
	createRestyleComponent,
	layout,
	spacing,
	spacingShorthand,
} from '@shopify/restyle'

import { Theme } from '@theme'

// import { Container } from './styles';

export const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>

export type TouchableOpacityBoxProps = TouchableOpacityProps &
	BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	SpacingShorthandProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme>

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
	[backgroundColor, spacing, spacingShorthand, layout, border],
	TouchableOpacity
)
