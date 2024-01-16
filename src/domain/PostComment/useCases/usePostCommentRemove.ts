import { MutateOptions, useMutation } from '@infra'

import { postCommentsService } from '../postCommentService'

export function usePostCommentRemove(options?: MutateOptions<string>) {
	return useMutation<{ commentId: number }, string>(
		({ commentId }) => postCommentsService.remove(commentId),
		options
	)
}
