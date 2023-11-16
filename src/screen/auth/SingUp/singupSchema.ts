import { z } from 'zod'

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim

export const singupSchemachema = z.object({
	username: z.string().regex(userNameRegex, 'Username inválido').toLowerCase(),
	fullName: z
		.string()
		.min(5, 'Nome muito curto')
		.max(50, 'Nome muito grande')
		.transform((v) =>
			v
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
				.join(' ')
		),
	email: z.string().email('Email inválido'),
	password: z.string().min(8, 'Mínimo 8 caracteres'),
})

export type SingupSchema = z.infer<typeof singupSchemachema>
