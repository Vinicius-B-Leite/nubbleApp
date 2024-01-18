import React from 'react'
import { FlatList } from 'react-native'

import { useCommentsList, useUserGetById } from '@domain'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import PostCommentBottom from './components/PostCommentBottom'
import PostCommentItem from './components/PostCommentItem'
import PostCommentTextMessage from './components/PostCommentTextMessage'

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
	const { postId, postAuthorId } = route.params
	const { bottom } = useAppSafeArea()
	const { user } = useUserGetById(1)
	const { dataList: list, fetchNextPage, hasNextPage } = useCommentsList(postId)

	return (
		<Screen flex={1} title="Comentários" canGoBack>
			<Box flex={1} justifyContent="space-between">
				<FlatList
					data={list}
					keyExtractor={({ id }) => id.toString()}
					contentContainerStyle={{ paddingBottom: bottom }}
					renderItem={({ item }) => (
						<PostCommentItem userId={user?.id || 1} postAuthorId={postAuthorId} comment={item} />
					)}
					ListFooterComponent={
						<PostCommentBottom hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
					}
					showsVerticalScrollIndicator={false}
				/>

				<PostCommentTextMessage postId={postId} />
			</Box>
		</Screen>
	)
}
