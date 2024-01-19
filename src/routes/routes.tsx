import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { useAuthCredentials } from '@services'

import { ActivityIndicator, Box } from '@components'

import AppStack from './appStack'
import AuthStack from './authStack'

const Router: React.FC = () => {
	const { auth, isLoading } = useAuthCredentials()

	if (isLoading) {
		;<Box flex={1} bg="background" justifyContent="center" alignItems="center">
			<ActivityIndicator size={'large'} />
		</Box>
	}

	return <NavigationContainer>{auth ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

export default Router
