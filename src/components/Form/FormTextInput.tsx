import React from 'react'

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'

import { TextInputProps, TextInput } from '@components'

export type FormTextInputProps<T extends FieldValues> = TextInputProps & UseControllerProps<T>

export function FormTextInput<FormType extends FieldValues>({
	control,
	name,
	rules,
	...textInputProps
}: FormTextInputProps<FormType>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => (
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
