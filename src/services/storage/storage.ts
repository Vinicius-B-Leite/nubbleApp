import { MMKV } from 'react-native-mmkv'

import { Storage } from './storageTypes'

const mmkv = new MMKV()

export const storage: Storage = {
	getItem: async (key) => {
		const storageResponse = mmkv.getString(key)
		return storageResponse ? JSON.parse(storageResponse) : null
	},
	removeItem: async (key) => {
		mmkv.delete(key)
		return
	},
	setItem: async (key, data) => {
		mmkv.set(key, JSON.stringify(data))
	},
}
