import React from 'react'

import { PostComments } from '@domain'

import { Box, ProfileAvatar, Text } from '@components'

type PostCommentItemProps = {
	comment: PostComments
}
const PostCommentItem: React.FC<PostCommentItemProps> = ({ comment }) => {
	return (
		<Box flexDirection="row" alignItems="center" gap="s12" mb="s16">
			<ProfileAvatar profileURL={comment.author.profileURL} />
			<Box flex={1}>
				<Text preset="paragraphSmall" bold>
					{comment.author.userName}
				</Text>
				<Text preset="paragraphSmall" color="gray1">
					{comment.message} - {comment.createdAtRelative}
				</Text>
			</Box>
		</Box>
	)
}

export default PostCommentItem
