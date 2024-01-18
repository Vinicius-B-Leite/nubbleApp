import { AuthCredentials } from '@domain'

export type AuthCredentialsService = {
	auth: AuthCredentials | null
	saveAuthCredentials: (ac: AuthCredentials) => Promise<void>
	removeAuthCredentials: () => Promise<void>
	isLoading: boolean
}
