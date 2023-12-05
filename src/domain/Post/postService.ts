import { postAdapter } from './postAdapter'
import { postApi } from './postApi'
import { Post } from './postTypes'

async function getList(): Promise<Post[]> {
	const postPageApi = await postApi.getList()
	const data = postPageApi.data
	return data.map((p) => postAdapter.parseToPost(p))
}

export const postService = {
	getList,
}
