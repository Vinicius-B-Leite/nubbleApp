/* eslint-disable react/prop-types */
import React from 'react'
import { TextStyle } from 'react-native'

import { createText } from '@shopify/restyle'

import { Theme } from '@theme'

interface TextProps extends SRTextProps {
	preset?: TextVariants
	bold?: boolean
	italic?: boolean
	semiBold?: boolean
}

const RSText = createText<Theme>()
type SRTextProps = React.ComponentProps<typeof RSText>

export function Text({
	children,
	preset = 'paragraphMedium',
	bold,
	italic,
	semiBold,
	style,
	...rest
}: TextProps) {
	const fontFamily = getFontFamily(bold, italic, semiBold)
	return (
		<RSText
			color="backgroundContrast"
			style={[$fontSizes[preset], { fontFamily }, style]}
			{...rest}
		>
			{children}
		</RSText>
	)
}

function getFontFamily(bold?: boolean, italic?: boolean, semiBold?: boolean) {
	switch (true) {
		case bold && italic:
			return $fontFamily.boldItalic
		case bold:
			return $fontFamily.bold
		case italic:
			return $fontFamily.italic
		case semiBold && italic:
			return $fontFamily.mediumItalic
		case semiBold:
			return $fontFamily.medium
		default:
			return $fontFamily.regular
	}
}

type TextVariants =
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'paragraphCaption'
	| 'paragraphCaptionSmall'

export const $fontSizes: Record<TextVariants, TextStyle> = {
	headingLarge: { fontSize: 32, lineHeight: 38.4 },
	headingMedium: { fontSize: 22, lineHeight: 26.4 },
	headingSmall: { fontSize: 18, lineHeight: 23.4 },

	paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
	paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
	paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

	paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
	paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}

export const $fontFamily = {
	black: 'Satoshi-Black',
	blackItalic: 'Satoshi-BlackItalic',
	bold: 'Satoshi-Bold',
	boldItalic: 'Satoshi-BoldItalic',
	italic: 'Satoshi-Italic',
	light: 'Satoshi-Light',
	lightItalic: 'Satoshi-LightItalic',
	medium: 'Satoshi-Medium',
	mediumItalic: 'Satoshi-MediumItalic',
	regular: 'Satoshi-Regular',
}
