import React from 'react'

import { useAuthRequestNewPassword } from '@domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Screen, Text, FormTextInput, Button } from '@components'
import { useResetNavigationSuccess } from '@hooks'

import { ForgetPasswordForm, forgetPasswordSchema } from './forgetPasswodSchema'

export const ForgetPassword: React.FC = () => {
	const { navigateToSucess } = useResetNavigationSuccess()
	const { isLoading, requestNewPassword } = useAuthRequestNewPassword({
		onSuccess: () => {
			navigateToSucess({
				title: 'Enviamos as instruções para seu e-mail',
				description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
				icon: {
					name: 'messageRound',
					color: 'primary',
				},
			})
		},
	})
	const { control, formState, handleSubmit } = useForm<ForgetPasswordForm>({
		resolver: zodResolver(forgetPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'onChange',
	})

	const handleRequestNewPassword = ({ email }: ForgetPasswordForm) => {
		requestNewPassword(email)
	}
	return (
		<Screen canGoBack>
			<Text preset="headingLarge" bold>
				Esqueci minha senha
			</Text>
			<Text preset="paragraphLarge" mt="s16">
				Digite seu e-mail e enviaremos as instruções para redefinição de senha
			</Text>

			<FormTextInput
				control={control}
				label="Email"
				name="email"
				placeholder="Digite seu e-mail"
				boxProps={{
					mt: 's32',
				}}
			/>

			<Button
				loading={isLoading}
				disabled={!formState.isValid}
				title="Recuperar senha"
				mt="s48"
				onPress={handleSubmit(handleRequestNewPassword)}
			/>
		</Screen>
	)
}
