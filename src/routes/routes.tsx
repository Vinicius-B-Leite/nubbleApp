import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import AppStack from './appStack'
import AuthStack from './authStack'

const Router: React.FC = () => {
	const isLogin = false
	return <NavigationContainer>{isLogin ? <AppStack /> : <AuthStack />}</NavigationContainer>
}

export default Router
