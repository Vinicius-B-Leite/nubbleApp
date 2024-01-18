import { MutateOptions, QueryKeys } from '@infra'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postCommentsService } from '../postCommentService'

export function usePostCommentRemove(options?: MutateOptions<string>) {
	const queryClient = useQueryClient()
	return useMutation<string, unknown, { commentId: number }>({
		mutationFn: ({ commentId }) => postCommentsService.remove(commentId),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.PostCommentList],
			})
			if (options?.onSuccess) {
				options.onSuccess(data)
			}
		},
		onError: () => {
			if (options?.onError) {
				options.onError(options?.errorMessage || 'Ocorreu um error')
			}
		},
	})
}
