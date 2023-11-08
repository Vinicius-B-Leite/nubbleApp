import React from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import useResetNavigationSuccess from '../../../hook/useResetNavigationSucess';



const ForgetPassword: React.FC = () => {
    const { navigateToSucess } = useResetNavigationSuccess()

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

            <TextInput
                label='Email'
                placeholder='Digite seu e-mail'
                boxProps={{
                    mt: 's32'
                }}
            />

            <Button title='Recuperar senha' mt='s48' onPress={handleNavigateToSucess} />
        </Screen>
    )
}

export default ForgetPassword;