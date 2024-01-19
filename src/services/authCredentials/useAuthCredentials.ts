import { useContext } from 'react'

import { AuthCredentialsService } from './authCredentialsTypes'
import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider'

export function useAuthCredentials(): AuthCredentialsService {
	return useContext(AuthCredentialsContext)
}

// export const useAuthCredentialsZustand = create<AuthCredentialsService>()(
// 	persist(
// 		(set) => ({
// 			auth: null,
// 			isLoading: false,
// 			removeAuthCredentials: async () => {
// 				set({ auth: null })
// 			},
// 			saveAuthCredentials: async (authCredentials) => {
// 				set({ auth: authCredentials })
// 			},
// 		}),
// 		{
// 			name: 'authCredentials',
// 			storage: storage,
// 		}
// 	)
// )
