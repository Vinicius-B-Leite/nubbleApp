import { z } from 'zod'



export const forgetPasswordSchema = z.object({
    email: z.string().email('Email inválido'),
})

export type ForgetPasswordForm = z.infer<typeof forgetPasswordSchema>