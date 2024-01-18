import React from 'react'
import { Pressable } from 'react-native'

import { Text } from '@components'

type PostCommentBottomProps = {
	fetchNextPage: () => void
	hasNextPage: boolean
}

const PostCommentBottom: React.FC<PostCommentBottomProps> = ({ fetchNextPage, hasNextPage }) => {
	if (!hasNextPage) return null
	return (
		<Pressable onPress={fetchNextPage}>
			<Text bold textAlign="center" color="primary">
				Ver mais
			</Text>
		</Pressable>
	)
}

export default PostCommentBottom
