import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import { Icon } from '../../../components/Icon';
import Button from '../../../components/Button';
import Screen from '../../../components/Screen/Screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamsList } from '../../../routes/routes';




type LoginProps = NativeStackScreenProps<StackParamsList, 'Login'>

const Login: React.FC<LoginProps> = ({ navigation }) => {
    return (
        <Screen>
            <Text mb='s8' preset='headingLarge' bold>Olá</Text>
            <Text mb='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>


            <TextInput
                label='Email'
                placeholder='Digite seu e-mail'
                boxProps={{
                    mb: 's20'
                }}
            />


            <TextInput
                label='Senha'
                placeholder='Digite sua senha'
                errorMessage='alksfjkaljfakls'
                RightComponent={<Icon name='eyeOff' color='gray2' />}
            />


            <Text color='primary' preset='paragraphSmall' bold mt='s10'>Esqueci minha senha</Text>

            <Button mt='s48' title='Entrar' />
            <Button preset='outline' title='Criar uma conta' mt='s12' onPress={() => navigation.navigate('SingUp')} />
        </Screen >
    )
}

export default Login;