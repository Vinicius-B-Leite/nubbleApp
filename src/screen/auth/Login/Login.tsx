import React from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import Screen from '../../../components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamsList } from '../../../routes/routes';
import { Icon } from '../../../components/Icon/Icon';
import { Controller, useForm } from 'react-hook-form';
import FormTextInput from '../../../components/Form/FormTextInput';
import FormPasswordInput from '../../../components/Form/FormPasswordInput';



type LoginFormType = {
    email: string,
    password: string
}
type LoginProps = NativeStackScreenProps<StackParamsList, 'Login'>

const Login: React.FC<LoginProps> = ({ navigation }) => {
    const { control, formState, handleSubmit } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    })

    const submitForm = (values: LoginFormType) => {
        console.log(values)
    }


    return (
        <Screen>
            <Text mb='s8' preset='headingLarge' bold>Olá</Text>
            <Text mb='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>


            <FormTextInput
                control={control}
                name='email'
                rules={{
                    required: 'Este campo é obrigatório',
                    pattern: {
                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                        message: 'Email inválido'
                    }
                }}
                label='Email'
                placeholder='Digite seu e-mail'
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
                        value: 6,
                        message: 'Minimo de 6 caracteres'
                    }
                }}
                label='Senha'
                placeholder='Digite sua senha'
                RightComponent={<Icon name='eyeOff' color='gray2' />}
            />


            <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
                <Text color='primary' preset='paragraphSmall' bold mt='s10'>Esqueci minha senha</Text>
            </Pressable>

            <Button
                mt='s48'
                title='Entrar'
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
            />

            <Button
                preset='outline'
                title='Criar uma conta'
                mt='s12'
                onPress={() => navigation.navigate('SingUp')}
            />
        </Screen >
    )
}

export default Login;