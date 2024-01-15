import { apiAdapter } from '@api'
import { Page } from '@types'

import { postCommentsApi } from './postCommentApi'
import { postCommentsAdapter } from './postCommentsAdpater'
import { PostComments } from './postCommentsTypes'

type Props = {
	page: number
	postId: number
}
async function getList({ page, postId }: Props): Promise<Page<PostComments>> {
	const response = await postCommentsApi.getList({ per_page: 10, post_id: postId, page })
	const data = response.data
	return {
		data: data.map(postCommentsAdapter.parseToPostComments),
		meta: apiAdapter.parseToMetaDatePage(response.meta),
	}
}

export const postCommentsService = {
	getList,
}
