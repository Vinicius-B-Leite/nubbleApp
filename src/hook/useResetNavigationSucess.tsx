import { useNavigation } from '@react-navigation/native'

import { StackParamsList } from '@routes'

export function useResetNavigationSuccess() {
	const navigation = useNavigation()
	const navigateToSucess = (params: StackParamsList['Success']) => {
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
