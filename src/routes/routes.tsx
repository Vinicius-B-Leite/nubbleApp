import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useAuthCredentials } from '@services'

import AppStack from './appStack'
import AuthStack from './authStack'

const Router: React.FC = () => {
	const { auth } = useAuthCredentials()

	return <NavigationContainer>{auth ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

export default Router
