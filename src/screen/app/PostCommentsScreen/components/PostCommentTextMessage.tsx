import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import { usePostCommentsCreate } from '@domain'

import { TextMessage } from '@components'

type PostCommentTextMessageProps = {
	postId: number
}

const PostCommentTextMessage: React.FC<PostCommentTextMessageProps> = ({ postId }) => {
	const { createComment } = usePostCommentsCreate(postId, {
		onSuccess: () => {
			setMessage('')
			Keyboard.dismiss()
		},
	})

	const [message, setMessage] = useState('')

	const handleSendMessage = () => {
		createComment(message)
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
