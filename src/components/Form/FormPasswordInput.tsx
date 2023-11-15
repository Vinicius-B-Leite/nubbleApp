import { Controller, FieldValues } from "react-hook-form";
import { PasswordInput, FormTextInputProps } from "@components";


export function FormPasswordInput<T extends FieldValues>({ control, name, rules, ...rest }: FormTextInputProps<T>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState, formState }) => (
                <PasswordInput
                    value={field.value}
                    onChangeText={field.onChange}
                    errorMessage={fieldState.error?.message}
                    {...rest}
                />
            )}
        />
    )
}