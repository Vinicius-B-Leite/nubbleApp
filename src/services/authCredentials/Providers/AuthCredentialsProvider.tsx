import React from 'react'
import { createContext, useEffect, useState } from 'react'

import { api } from '@api'
import { AuthCredentials, authService } from '@domain'

import { authStorage } from '../authCredentialsStorage'
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

	const startAuthCredentials = async () => {
		try {
			const ac = await authStorage.getAuth()
			if (ac) {
				authService.updateToken(ac.token)
				setAuth(ac)
			}
		} catch (error) {
			// TODO:
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		startAuthCredentials()
	}, [])

	useEffect(() => {
		const interceptor = api.interceptors.response.use(
			(response) => response,
			async (responseError) => {
				const { status } = responseError.response

				if (status === 401) {
					if (!auth?.refreshToken) {
						removeAuthCredentials()
						return Promise.reject(responseError)
					}

					const failedRequest = responseError.config

					const newAuthCredentials = await authService.refreshToken(auth?.refreshToken)
					saveAuthCredentials(newAuthCredentials)

					failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`
					return api(failedRequest)
				}
			}
		)

		return () => {
			api.interceptors.response.eject(interceptor)
		}
	}, [auth?.refreshToken])

	const removeAuthCredentials = async () => {
		await authStorage.removeAuth()
		authService.removeToken()
		setAuth(null)
	}

	const saveAuthCredentials = async (ac: AuthCredentials) => {
		authService.updateToken(ac.token)
		await authStorage.saveAuth(ac)

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
