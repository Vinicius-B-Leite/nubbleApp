import { AuthCredentials, authService } from '@domain'
import axios from 'axios'

export const baseURL = 'http://127.0.0.1:3333/'

export const api = axios.create({
	baseURL,
})

export function registerInterceptor(
	auth: AuthCredentials | null,
	saveAuthCredentials: (auth: AuthCredentials) => void,
	removeAuthCredentials: () => void
) {
	const interceptor = api.interceptors.response.use(
		(response) => response,
		async (responseError) => {
			const { status } = responseError.response

			if (status === 401) {
				const failedRequest = responseError.config

				if (
					!auth?.refreshToken ||
					authService.isRefreshToken(failedRequest) ||
					failedRequest.sent
				) {
					removeAuthCredentials()
					return Promise.reject(responseError)
				}
				failedRequest.sent = true

				const newAuthCredentials = await authService.refreshToken(auth?.refreshToken)
				saveAuthCredentials(newAuthCredentials)

				failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`
				return api(failedRequest)
			}

			return Promise.reject(responseError)
		}
	)

	return () => {
		api.interceptors.response.eject(interceptor)
	}
}
