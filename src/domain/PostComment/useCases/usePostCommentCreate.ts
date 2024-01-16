import { MutateOptions, useMutation } from '@infra'

import { postCommentsService } from '../postCommentService'
import { PostComments } from '../postCommentsTypes'

export function usePostCommentsCreate(postId: number, options?: MutateOptions<PostComments>) {
	const { error, isLoading, mutate } = useMutation<{ message: string }, PostComments>(
		({ message }) => postCommentsService.create(postId, message),
		options
	)

	const createComment = async (message: string) => {
		await mutate({ message })
	}

	return {
		createComment,
		isLoading,
		error,
	}
}
