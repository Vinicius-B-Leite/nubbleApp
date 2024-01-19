import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useAuthCredentialsZustand } from '@services'

import AppStack from './appStack'
import AuthStack from './authStack'

const Router: React.FC = () => {
	const auth = useAuthCredentialsZustand((state) => state.auth)
	console.log(auth)

	return <NavigationContainer>{auth ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

export default Router
