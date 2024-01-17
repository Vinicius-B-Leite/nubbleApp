import { QueryKeys, usePaginationList } from '@infra'

import { postCommentsService } from '../postCommentService'

export function useCommentsList(postId: number) {
	const getList = (page: number) => {
		return postCommentsService.getList({ page, postId })
	}
	return usePaginationList({ fetch: getList, queryKey: [QueryKeys.PostCommentList] })
}
