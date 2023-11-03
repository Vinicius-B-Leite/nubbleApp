import React from 'react';
import Box, { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box';
import { Text } from '../Text';
import { ButtonPreset, buttonPreset } from './buttonPreset';
import ActivityIndicator from '../ActivityIndicator';





type ButtonProps = TouchableOpacityBoxProps & {
    loading?: boolean
    disabled?: boolean
    title: string,
    preset?: ButtonPreset
}

const Button: React.FC<ButtonProps> = ({ title, loading, preset = 'primary', disabled, ...rest }) => {
    const buttonPresetSelected = buttonPreset[preset][disabled ? 'disabled' : 'default']
    return (
        <TouchableOpacityBox
            disabled={disabled || loading}
            height={50}
            alignItems='center'
            justifyContent='center'
            paddingHorizontal='s20'
            borderRadius='s16'
            {...buttonPresetSelected.container}
            {...rest}
        >

            {loading ?
                <ActivityIndicator color={buttonPresetSelected.content} /> :
                <Text preset='paragraphMedium' bold italic color={buttonPresetSelected.content}>{title}</Text>
            }

        </TouchableOpacityBox>
    )
}

export default Button;