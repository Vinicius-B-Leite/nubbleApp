import React from 'react';
import { View } from 'react-native';
import Screen from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text';
import Button from '../../../components/Button';
import { Icon } from '../../../components/Icon/Icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamsList } from '../../../routes/routes';



type SuccessProps = NativeStackScreenProps<StackParamsList, 'Success'>

const Success: React.FC<SuccessProps> = ({ route, navigation }) => {

    const { description, icon, title } = route.params

    const handleGoBackToBegin = () => {
        navigation.goBack()
    }

    return (
        <Screen>
            <Icon {...icon} />

            <Text mt='s24' preset='headingLarge' bold>{title}</Text>
            <Text mt='s16' preset='paragraphLarge'>{description}</Text>

            <Button mt='s40' title='Voltar para o início' onPress={handleGoBackToBegin} />
        </Screen>
    )
}

export default Success;