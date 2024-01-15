import { apiAdapter } from '@api'
import { Page } from '@types'

import { postAdapter } from './postAdapter'
import { postApi } from './postApi'
import { Post } from './postTypes'

async function getList(page: number): Promise<Page<Post>> {
	const postPageApi = await postApi.getList({ page, per_page: 10 })
	const data = postPageApi.data
	return {
		data: data.map((p) => postAdapter.parseToPost(p)),
		meta: apiAdapter.parseToMetaDatePage(postPageApi.meta),
	}
}

export const postService = {
	getList,
}
