import { PaginationAPIResponse } from '@api'

import { PostAPI } from './postTypes'

type PostResponse = PaginationAPIResponse<PostAPI>

async function getList(): Promise<PostResponse> {
	const url = 'http://localhost:3333/user/post'

	const options = {
		method: 'GET',
		headers: {
			Authorization: 'Bearer Mg.LcSaNDTFcVj-2wH2e1rKgtVsvjCzDrklvotPRaiwsgYcI2kP7uAYM8KtGoqn',
		},
	}

	const response = await fetch(url, options)
	const data: PostResponse = await response.json()

	return data
}

export const postApi = {
	getList,
}
