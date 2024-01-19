import { createContext, useState } from 'react'

import { AuthCredentials } from '@domain'

import { AuthCredentialsService } from '../authCredentialsTypes'

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
	auth: null,
	isLoading: false,
	removeAuthCredentials: async () => {},
	saveAuthCredentials: async () => {},
})

export const AuthCredentialsProvider = ({ children }: React.PropsWithChildren) => {
	const [auth, setAuth] = useState<null | AuthCredentials>(null)
	const [isLoading, setIsLoading] = useState(true)

	const removeAuthCredentials = async () => {
		setAuth(null)
	}

	const saveAuthCredentials = async (ac: AuthCredentials) => {
		setAuth(ac)
	}

	return (
		<AuthCredentialsContext.Provider
			value={{ auth, isLoading, removeAuthCredentials, saveAuthCredentials }}
		>
			{children}
		</AuthCredentialsContext.Provider>
	)
}
