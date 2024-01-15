import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://127.0.0.1:3333/',
	headers: {
		Authorization: 'Bearer Mw.dz9x1rOnDnVqnwegoo5R7zVLNgRQRTeyNlIgWtYwUO4nZlxh1xnw0CiyahwH',
	},
})
