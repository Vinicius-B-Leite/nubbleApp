import React from 'react'

import { Post } from '@domain'
import { useNavigation } from '@react-navigation/native'

import { Box } from '../Box'

import PostActions from './components/PostActions'
import { PostBottom } from './components/PostBottom'
import PostHeader from './components/PostHeader'
import PostImage from './components/PostImage'

type PostProps = {
	post: Post
}

export function PostItem({ post }: PostProps) {
	const navition = useNavigation()

	const navigateToProfile = () => {
		navition.navigate('ProfileScreen', { userId: post.author.id })
	}

	return (
		<Box marginBottom="s24" paddingHorizontal="s24">
			<PostHeader onPress={navigateToProfile} {...post.author} />
			<PostImage imageURL={post.imageURL} />
			<PostActions {...post} />
			<PostBottom {...post} />
		</Box>
	)
}
