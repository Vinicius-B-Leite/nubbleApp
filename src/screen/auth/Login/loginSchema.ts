import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(1, 'Senha obrigatória'),
})

export type LoginFormType = z.infer<typeof loginSchema>
