import React from 'react'

import { Post } from '@domain'

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components'

type PostActionsProps = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>

const PostActions: React.FC<PostActionsProps> = ({
	commentCount,
	favoriteCount,
	reactionCount,
}) => {
	return (
		<Box flexDirection="row" mt="s16">
			<Item
				icon={{ default: 'heart', marked: 'heartFill' }}
				marked
				onPress={console.log}
				text={reactionCount}
			/>
			<Item
				icon={{ default: 'comment', marked: 'comment' }}
				onPress={console.log}
				text={commentCount}
			/>
			<Item
				icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
				onPress={console.log}
				text={favoriteCount}
			/>
		</Box>
	)
}

type ItemProps = {
	onPress: () => void
	text: string | number
	marked?: boolean
	icon: {
		default: IconProps['name']
		marked: IconProps['name']
	}
}
function Item({ icon, onPress, text, marked = false }: ItemProps) {
	return (
		<TouchableOpacityBox mr="s24" flexDirection="row" alignItems="center" onPress={onPress}>
			<Icon name={icon[marked ? 'marked' : 'default']} color={marked ? 'marked' : undefined} />
			<Text ml="s4">{text}</Text>
		</TouchableOpacityBox>
	)
}
export default PostActions
