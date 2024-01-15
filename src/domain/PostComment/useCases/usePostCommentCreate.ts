import { useState } from 'react'

import { postCommentsService } from '../postCommentService'
import { PostComments } from '../postCommentsTypes'

type Options = {
	onSuccess: (comment: PostComments) => void
}
export function usePostCommentsCreate(postId: number, options?: Options) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const createComment = async (message: string) => {
		try {
			setIsLoading(true)
			setError(false)
			const postComment = await postCommentsService.create(postId, message)
			if (options?.onSuccess) {
				options.onSuccess(postComment)
			}
		} catch (error) {
			setError(true)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		createComment,
		isLoading,
		error,
	}
}
