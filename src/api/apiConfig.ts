import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://127.0.0.1:3333/',
	headers: {
		Authorization: 'Bearer NA.HxVF--9vSFE5N7VcIVN8IhMU7aqC97gyIuQMD6ZdVNISIaw0gHjYIQRr-3T3',
	},
})
