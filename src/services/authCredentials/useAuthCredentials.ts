import { create } from 'zustand'

import { AuthCredentialsService } from './authCredentialsTypes'

export function useAuthCredentials(): AuthCredentialsService {
	return {
		auth: null,
		removeAuthCredentials: async () => {},
		saveAuthCredentials: async () => {},
		isLoading: false,
	}
}

export const useAuthCredentialsZustand = create<AuthCredentialsService>((set) => ({
	auth: null,
	isLoading: false,
	removeAuthCredentials: async () => {},
	saveAuthCredentials: async () => {},
}))
