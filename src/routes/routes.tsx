import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useAuthCredentialsZustand } from '@services'

import AppStack from './appStack'
import AuthStack from './authStack'

const Router: React.FC = () => {
	const { auth } = useAuthCredentialsZustand()
	return <NavigationContainer>{!auth ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

export default Router
