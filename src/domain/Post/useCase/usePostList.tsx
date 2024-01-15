import { usePaginationList } from '@domain'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostList() {
	return usePaginationList<Post>({ fetch: postService.getList })
}
