import React from 'react';
import { useResetNavigationSuccess } from '@hooks';
import { useForm } from 'react-hook-form';
import { SingupSchema, singupSchemachema } from './singupSchema';
import { zodResolver } from '@hookform/resolvers/zod'
import { Screen, Text, FormTextInput, FormPasswordInput, Button } from '@components'



export const SingUp: React.FC = () => {
    const { navigateToSucess } = useResetNavigationSuccess()
    const { control, formState, handleSubmit } = useForm<SingupSchema>({
        resolver: zodResolver(singupSchemachema),
        defaultValues: {
            email: '',
            fullName: '',
            username: '',
            password: '',
        },
        mode: 'onChange'
    })
    const handleNavigationToSucess = () => {
        navigateToSucess({
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'greenSuccess'
            },
        })

    }
    return (
        <Screen canGoBack scrollEnabled >
            <Text bold mb='s32' preset='headingLarge'>Criar uma conta</Text>

            <FormTextInput
                control={control}
                label='Seu username'
                name='username'
                placeholder='@'
                boxProps={{
                    mb: 's20'
                }}
            />

            <FormTextInput
                control={control}
                name='fullName'
                label='Nome completo'
                placeholder='Digie seu nome'
                boxProps={{
                    mb: 's20'
                }}
            />
            <FormTextInput
                control={control}
                name='email'
                label='Email'
                placeholder='Digie seu email'
                boxProps={{
                    mb: 's20'
                }}
            />

            <FormPasswordInput
                control={control}
                name='password'
                label='Senha'
                placeholder='Digie sua senha'
                boxProps={{
                    mb: 's48'
                }}
            />

            <Button disabled={!formState.isValid} title='Criar uma conta' onPress={handleNavigationToSucess} />
        </Screen>
    )
}

