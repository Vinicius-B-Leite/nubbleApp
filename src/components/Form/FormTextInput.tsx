import React from 'react';
import { Control, Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { View } from 'react-native';
import TextInput, { TextInputProps } from '../TextInput';



export type FormTextInputProps<T extends FieldValues> = TextInputProps & UseControllerProps<T>

export default function FormTextInput<FormType extends FieldValues>({ control, name, rules, ...textInputProps }: FormTextInputProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState, formState }) => (
                <TextInput
                    value={field.value}
                    onChangeText={field.onChange}
                    errorMessage={fieldState.error?.message}
                    {...textInputProps}
                />
            )}
        />
    )
}
