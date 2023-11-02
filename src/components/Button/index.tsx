import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import Box, { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box';
import { Text } from '../Text';

type ButtonProps = TouchableOpacityBoxProps & {
    loading?: boolean
    title: string
}

const Button: React.FC<ButtonProps> = ({ title, loading, ...rest }) => {
    return (
        <TouchableOpacityBox
            height={50}
            backgroundColor='buttonPrimary'
            alignItems='center'
            justifyContent='center'
            paddingHorizontal='s20'
            borderRadius='s16'
            {...rest}
        >

            {loading ?
                <ActivityIndicator /> :
                <Text preset='paragraphMedium' bold italic color='primaryContrast'>{title}</Text>
            }

        </TouchableOpacityBox>
    )
}

export default Button;