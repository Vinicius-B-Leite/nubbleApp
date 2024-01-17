import { QueryKeys, usePaginationList } from '@infra'

import { postService } from '../postService'
import { Post } from '../postTypes'

export function usePostList() {
	return usePaginationList<Post>({ fetch: postService.getList, queryKey: [QueryKeys.PostList] })
}
