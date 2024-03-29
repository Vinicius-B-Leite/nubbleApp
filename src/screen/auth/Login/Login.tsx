import React from 'react'
import { Pressable } from 'react-native'

import { useAuthSignIn } from '@domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToastService } from '@services'
import { useForm } from 'react-hook-form'

import { Text, Icon, Screen, FormTextInput, FormPasswordInput, Button } from '@components'
import { AuthScreenProps } from '@routes'

import { LoginFormType, loginSchema } from './loginSchema'

export const Login: React.FC<AuthScreenProps<'Login'>> = ({ navigation }) => {
	const { showToast } = useToastService()
	const { control, formState, handleSubmit } = useForm<LoginFormType>({
		resolver: zodResolver(loginSchema),

		defaultValues: {
			email: '',

			password: '',
		},

		mode: 'onChange',
	})

	const { isLoading, signIn } = useAuthSignIn({
		onError: (errorMessage) => {
			showToast({
				message: errorMessage,
				type: 'error',
			})
		},
	})

	const submitForm = (values: LoginFormType) => {
		signIn({ email: values.email, password: values.password })
	}

	return (
		<Screen>
			<Text mb="s8" preset="headingLarge" bold>
				Olá
			</Text>

			<Text mb="s40" preset="paragraphLarge">
				Digite seu e-mail e senha para entrar
			</Text>

			<FormTextInput
				control={control}
				name="email"
				label="Email"
				placeholder="Digite seu e-mail"
				boxProps={{
					mb: 's20',
				}}
			/>

			<FormPasswordInput
				control={control}
				name="password"
				label="Senha"
				placeholder="Digite sua senha"
				RightComponent={<Icon name="eyeOff" color="gray2" />}
			/>

			<Pressable onPress={() => navigation.navigate('ForgetPassword')}>
				<Text color="primary" preset="paragraphSmall" bold mt="s10">
					Esqueci minha senha
				</Text>
			</Pressable>

			<Button
				mt="s48"
				title="Entrar"
				onPress={handleSubmit(submitForm)}
				disabled={!formState.isValid}
				loading={isLoading}
			/>

			<Button
				preset="outline"
				title="Criar uma conta"
				mt="s12"
				onPress={() => navigation.navigate('SingUp')}
			/>
		</Screen>
	)
}
