import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentsCreate } from '@domain'

import { TextMessage } from '@components'

type PostCommentTextMessageProps = {
	postId: number
	onAddComment: () => void
}

const PostCommentTextMessage: React.FC<PostCommentTextMessageProps> = ({
	postId,
	onAddComment,
}) => {
	const { createComment } = usePostCommentsCreate(postId, {
		onSuccess: () => {
			setMessage('')
			Keyboard.dismiss()
			onAddComment()
		},
	})

	const [message, setMessage] = useState('')

	const handleSendMessage = async () => {
		await createComment(message)
	}

	return (
		<TextMessage
			value={message}
			onChangeText={setMessage}
			placeholder="Adicione um comentário"
			onPressSend={handleSendMessage}
			onEndEditing={handleSendMessage}
		/>
	)
}

export default PostCommentTextMessage
