import React from 'react'

import { useAuthSignUp } from '@domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Screen, Text, FormTextInput, FormPasswordInput, Button } from '@components'
import { useResetNavigationSuccess } from '@hooks'

import { signUpSchema, SingupSchema } from './singupSchema'

export const SingUp: React.FC = () => {
	const { isLoading, signUp } = useAuthSignUp({
		onSuccess: () => {
			navigateToSucess({
				title: 'Sua conta foi criada com sucesso!',
				description: 'Agora é só fazer login na nossa plataforma',
				icon: {
					name: 'checkRound',
					color: 'greenSuccess',
				},
			})
		},
	})
	const { navigateToSucess } = useResetNavigationSuccess()
	const { control, formState, handleSubmit } = useForm<SingupSchema>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			username: '',
			password: '',
		},
		mode: 'onChange',
	})
	const handleSingUp = (formData: SingupSchema) => {
		signUp(formData)
	}
	return (
		<Screen canGoBack scrollEnabled>
			<Text bold mb="s32" preset="headingLarge">
				Criar uma conta
			</Text>

			<FormTextInput
				control={control}
				label="Seu username"
				name="username"
				placeholder="@"
				boxProps={{
					mb: 's20',
				}}
			/>

			<FormTextInput
				control={control}
				name="firstName"
				label="Seu nome"
				placeholder="Digie seu nome"
				boxProps={{
					mb: 's20',
				}}
			/>
			<FormTextInput
				control={control}
				name="lastName"
				label="Seu sobrenome"
				placeholder="Digie seu sobrenome"
				boxProps={{
					mb: 's20',
				}}
			/>
			<FormTextInput
				control={control}
				name="email"
				label="Email"
				placeholder="Digie seu email"
				boxProps={{
					mb: 's20',
				}}
			/>

			<FormPasswordInput
				control={control}
				name="password"
				label="Senha"
				placeholder="Digie sua senha"
				boxProps={{
					mb: 's48',
				}}
			/>

			<Button
				disabled={!formState.isValid}
				loading={isLoading}
				title="Criar uma conta"
				onPress={handleSubmit(handleSingUp)}
			/>
		</Screen>
	)
}
