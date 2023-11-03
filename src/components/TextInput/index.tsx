import React, { useRef } from 'react';
import { Pressable, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';
import Box, { BoxProps } from '../Box';
import { $fontFamily, Text, $fontSizes } from '../Text';
import { useAppTheme } from '../../hook/useAppTheme';
import { err } from 'react-native-svg/lib/typescript/xml';

export type TextInputProps = RNTextInputProps & {
    label: string
    errorMessage?: string
    RightComponent?: React.ReactElement
    boxProps?: BoxProps
}

const TextInput: React.FC<TextInputProps> = ({ label, errorMessage, RightComponent, boxProps, ...rest }) => {
    const { colors } = useAppTheme()
    const inputRef = useRef<RNTextInput>(null)
    return (
        <Box {...boxProps}>
            <Pressable onPress={() => inputRef.current?.focus()}>
                <Text preset='paragraphMedium' mb='s4'>{label}</Text>
                <Box flexDirection='row' borderWidth={errorMessage ? 2 : 1} p='s16' borderColor={errorMessage ? 'error' : 'gray4'} borderRadius='s12'>
                    <RNTextInput
                        ref={inputRef}
                        placeholderTextColor={colors.gray2}
                        style={{
                            flexGrow: 1,
                            flexShrink: 1,
                            padding: 0,
                            fontFamily: $fontFamily.regular,
                            ...$fontSizes.paragraphMedium
                        }} {...rest} />
                    {
                        RightComponent &&
                        <Box ml='s16' justifyContent='center'>
                            {RightComponent}
                        </Box>
                    }
                </Box>
                {
                    errorMessage && <Text preset='paragraphSmall' bold color='error'>{errorMessage}</Text>
                }
            </Pressable>
        </Box>
    )
}

export default TextInput;