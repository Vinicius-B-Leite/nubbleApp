import { AuthCredentials } from '@domain'

import { storage } from '../storage/storage'

const AUTH_KEY = '@auth'

const saveAuth = async (ac: AuthCredentials) => {
	await storage.setItem(AUTH_KEY, ac)
	return
}

const getAuth = async () => {
	const auth = await storage.getItem<AuthCredentials>(AUTH_KEY)
	return auth
}

const removeAuth = async () => {
	await storage.removeItem(AUTH_KEY)
}

export const authStorage = {
	saveAuth,
	getAuth,
	removeAuth,
}
