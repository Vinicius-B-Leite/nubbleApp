import { useNavigation } from '@react-navigation/native'

import { AuthParamsList } from '@routes'

export function useResetNavigationSuccess() {
	const navigation = useNavigation()
	const navigateToSucess = (params: AuthParamsList['Success']) => {
		navigation.reset({
			index: 0,
			routes: [
				{
					name: 'Login',
				},
				{
					name: 'Success',
					params: params,
				},
			],
		})
	}

	return {
		navigateToSucess,
	}
}
