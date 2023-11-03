import React from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text';
import TextInput from '../../../components/TextInput';
import { Icon } from '../../../components/Icon';
import Button from '../../../components/Button';
import { useAppTheme } from '../../../hook/useAppTheme';
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamsList } from '../../../routes/routes';



type SingUpProps = NativeStackScreenProps<StackParamsList, 'SingUp'>

const SingUp: React.FC<SingUpProps> = ({ navigation }) => {
    return (
        <Screen canGoBack scrollEnabled >
            <Text bold mb='s32' preset='headingLarge'>Criar uma conta</Text>

            <TextInput
                placeholder='@'
                label='Seu username'
                boxProps={{
                    mb: 's20'
                }}
            />
            <TextInput
                label='Nome completo'
                placeholder='Digie seu nome'
                boxProps={{
                    mb: 's20'
                }}
            />
            <TextInput
                label='Email'
                placeholder='Digie seu email'
                boxProps={{
                    mb: 's20'
                }}
            />
            <PasswordInput
                label='Senha'

                placeholder='Digie sua senha'
                boxProps={{
                    mb: 's48'
                }}
            />

            <Button title='Criar uma conta' onPress={() => navigation.navigate('Success')} />
        </Screen>
    )
}

export default SingUp;