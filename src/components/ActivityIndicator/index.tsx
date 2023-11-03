import { useTheme } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';
import { Theme, ThemeColors } from '../../theme/theme';

type ActivityIndicatorProps = RNActivityIndicatorProps & {
    color: ThemeColors
}
const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color, ...rest }) => {
    const { colors } = useTheme<Theme>()
    return (
        <RNActivityIndicator color={colors[color]} {...rest} />
    )
}

export default ActivityIndicator;