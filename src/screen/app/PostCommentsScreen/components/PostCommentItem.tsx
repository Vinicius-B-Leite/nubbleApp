import React from 'react'
import { Alert } from 'react-native'

import { PostComments, postCommentsService, usePostCommentRemove } from '@domain'

import { Box, ProfileAvatar, Text, TouchableOpacityBox } from '@components'

type PostCommentItemProps = {
	comment: PostComments
	userId: number
	postAuthorId: number
}
const PostCommentItem: React.FC<PostCommentItemProps> = ({ comment, postAuthorId, userId }) => {
	const { mutate } = usePostCommentRemove()
	const isAllowToDelete = postCommentsService.isAllowToDeleteComment(comment, userId, postAuthorId)
	const handleDelete = () => {
		Alert.alert('Atenção!', `Deseja deletar o comentário de ${comment.author.name}`, [
			{
				onPress: () => mutate({ commentId: comment.id }),
				text: 'Sim',
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		])
	}
	return (
		<TouchableOpacityBox
			disabled={!isAllowToDelete}
			onLongPress={handleDelete}
			flexDirection="row"
			alignItems="center"
			gap="s12"
			mb="s16"
		>
			<ProfileAvatar profileURL={comment.author.profileURL} />
			<Box flex={1}>
				<Text preset="paragraphSmall" bold>
					{comment.author.userName}
				</Text>
				<Text preset="paragraphSmall" color="gray1">
					{comment.message} {comment.createdAtRelative}
				</Text>
			</Box>
		</TouchableOpacityBox>
	)
}

export default PostCommentItem
