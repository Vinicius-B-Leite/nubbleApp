import React from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen/Screen';
import { Icon } from '../../../components/Icon';
import { Text } from '../../../components/Text';
import Button from '../../../components/Button';

// import { Container } from './styles';

const Success: React.FC = () => {
    return (
        <Screen>
            <Icon name='check' />
            <Text mt='s24' preset='headingLarge' bold>Sua conta foi criada</Text>
            <Text mt='s16' preset='paragraphLarge'>Sua conta foi criadaaaaaa</Text>

            <Button mt='s40' title='Voltar para o início' />
        </Screen>
    )
}

export default Success;