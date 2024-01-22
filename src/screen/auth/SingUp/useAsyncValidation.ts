import { useEmailIsAvalibe, useUsernameIsAvalibe } from '@domain'
import { UseFormGetFieldState, UseFormWatch } from 'react-hook-form'

import { SingupSchema } from './singupSchema'

type useAsyncValidationProps = {
	watch: UseFormWatch<SingupSchema>
	getFieldState: UseFormGetFieldState<SingupSchema>
}

export const useAsyncValidation = ({ watch, getFieldState }: useAsyncValidationProps) => {
	const username = watch('username')
	const usernameenabled =
		!getFieldState('username').invalid && getFieldState('username').isDirty && username.length > 0
	const usernameQuery = useUsernameIsAvalibe({ username, enabled: usernameenabled })

	const email = watch('email')
	const emailEnabled =
		!getFieldState('email').invalid && getFieldState('email').isDirty && email.length > 0
	const emailQuery = useEmailIsAvalibe({ email, enabled: emailEnabled })

	return {
		usernameValidation: {
			errorMessage: usernameQuery.isUnvalibe ? 'Username já existe' : undefined,
			isLoading: usernameQuery.isFetching,
			notReady: usernameQuery.isUnvalibe || usernameQuery.isFetching,
		},
		emailValidation: {
			errorMessage: emailQuery.isUnvalibe ? 'Email já está em uso' : undefined,
			isLoading: emailQuery.isFetching,
			notReady: emailQuery.isUnvalibe || emailQuery.isFetching,
		},
	}
}
