import { MutateOptions, QueryKeys } from '@infra'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postCommentsService } from '../postCommentService'
import { PostComments } from '../postCommentsTypes'

export function usePostCommentsCreate(postId: number, options?: MutateOptions<PostComments>) {
	const queryClient = useQueryClient()
	const { mutate, isLoading, isError } = useMutation<PostComments, unknown, { message: string }>({
		mutationFn: ({ message }) => postCommentsService.create(postId, message),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: [QueryKeys.PostCommentList, postId],
			})
			if (options?.onSuccess) {
				options.onSuccess(data)
			}
		},
		onError: () => {
			if (options?.onError) {
				options.onError(options?.errorMessage || 'Ocorreu um erro!')
			}
		},
	})

	const createComment = (message: string) => {
		mutate({ message })
	}

	return {
		createComment,
		isLoading,
		isError,
	}
}
