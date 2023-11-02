import { BackgroundColorProps, BorderProps, LayoutProps, SpacingProps, SpacingShorthandProps, backgroundColor, border, createBox, createRestyleComponent, layout, spacing, spacingShorthand } from '@shopify/restyle';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Theme } from '../../theme/theme';

// import { Container } from './styles';

const Box = createBox<Theme>()
export type BoxProps = React.ComponentProps<typeof Box>
export default Box



export type TouchableOpacityBoxProps =
    TouchableOpacityProps & BackgroundColorProps<Theme> &
    SpacingProps<Theme> & SpacingShorthandProps<Theme> &
    LayoutProps<Theme> & BorderProps<Theme>

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
    [backgroundColor, spacing, spacingShorthand, layout, border],
    TouchableOpacity
)