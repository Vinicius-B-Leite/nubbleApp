import React from 'react';
import { useResetNavigationSuccess } from '@hooks';
import { useForm } from 'react-hook-form';
import { ForgetPasswordForm, forgetPasswordSchema } from './forgetPasswodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Screen, Text, FormTextInput, Button } from '@components'


export const ForgetPassword: React.FC = () => {
    const { navigateToSucess } = useResetNavigationSuccess()
    const { control, handleSubmit, formState } = useForm<ForgetPasswordForm>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange'
    })

    const handleNavigateToSucess = () => {
        navigateToSucess({
            title: 'Enviamos as instruções para seu e-mail',
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary'
            }
        })
    }

    return (
        <Screen canGoBack>
            <Text preset='headingLarge' bold >Esqueci minha senha</Text>
            <Text preset='paragraphLarge' mt='s16'>Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>


            <FormTextInput
                control={control}
                label='Email'
                name='email'
                placeholder='Digite seu e-mail'
                boxProps={{
                    mt: 's32'
                }}
            />

            <Button disabled={!formState.isValid} title='Recuperar senha' mt='s48' onPress={handleNavigateToSucess} />
        </Screen>
    )
}
