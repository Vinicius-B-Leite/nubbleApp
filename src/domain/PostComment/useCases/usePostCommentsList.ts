import { usePaginationList } from '../../hooks/usePaginationList'
import { postCommentsService } from '../postCommentService'

export function useCommentsList(postId: number) {
	const getList = (page: number) => {
		return postCommentsService.getList({ page, postId })
	}
	return usePaginationList({ fetch: getList })
}
