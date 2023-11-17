import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamsList } from './appStack'
import { AuthParamsList } from './authStack'

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AuthParamsList, AppStackParamsList {}
	}
}

export type AppScreenProps<RouteName extends keyof AppStackParamsList> = NativeStackScreenProps<
	AppStackParamsList,
	RouteName
>

export type AuthScreenProps<RouteName extends keyof AuthParamsList> = NativeStackScreenProps<
	AuthParamsList,
	RouteName
>
