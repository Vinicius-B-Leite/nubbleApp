import React from 'react'
import { FlatList } from 'react-native'

import { useCommentsList, useUser } from '@domain'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import PostCommentBottom from './components/PostCommentBottom'
import PostCommentItem from './components/PostCommentItem'
import PostCommentTextMessage from './components/PostCommentTextMessage'

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
	const { postId, postAuthorId } = route.params
	const { bottom } = useAppSafeArea()
	const { userId } = useUser()
	const { postList: list, fetchNextPage, hasNextPage, refetch } = useCommentsList(postId)

	return (
		<Screen flex={1} title="Comentários" canGoBack>
			<Box flex={1} justifyContent="space-between">
				<FlatList
					data={list}
					keyExtractor={({ id }) => id.toString()}
					contentContainerStyle={{ paddingBottom: bottom }}
					renderItem={({ item }) => (
						<PostCommentItem
							onEndDelete={refetch}
							userId={userId}
							postAuthorId={postAuthorId}
							comment={item}
						/>
					)}
					ListFooterComponent={
						<PostCommentBottom hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
					}
					showsVerticalScrollIndicator={false}
				/>

				<PostCommentTextMessage postId={postId} onAddComment={refetch} />
			</Box>
		</Screen>
	)
}
