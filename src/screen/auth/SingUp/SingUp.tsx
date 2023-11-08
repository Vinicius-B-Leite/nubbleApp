import React from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import { Icon } from '../../../components/Icon/Icon';
import Button from '../../../components/Button';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import useResetNavigationSuccess from '../../../hook/useResetNavigationSucess';
import { Controller, useForm } from 'react-hook-form';
import FormTextInput from '../../../components/Form/FormTextInput';
import FormPasswordInput from '../../../components/Form/FormPasswordInput';



type SingUpFormType = {
    username: string,
    fullName: string,
    email: string,
    password: string
}

const SingUp: React.FC = () => {
    const { navigateToSucess } = useResetNavigationSuccess()
    const { control, formState, handleSubmit } = useForm<SingUpFormType>({
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
                rules={{
                    required: 'Este campo é obrigatório',
                }}
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
                rules={{
                    required: 'Este campo é obrigatório',
                }}
                boxProps={{
                    mb: 's20'
                }}
            />
            <FormTextInput
                control={control}
                name='email'
                label='Email'
                rules={{
                    required: 'Este campo é obrigatório',
                    pattern: {
                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                        message: 'Email inválido'
                    }
                }}
                placeholder='Digie seu email'
                boxProps={{
                    mb: 's20'
                }}
            />

            <FormPasswordInput
                control={control}
                name='password'
                rules={{
                    required: 'Este campo é obrigatório',
                    minLength: {
                        message: 'Mínimo 6 caracteres',
                        value: 6
                    }
                }}
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

export default SingUp;