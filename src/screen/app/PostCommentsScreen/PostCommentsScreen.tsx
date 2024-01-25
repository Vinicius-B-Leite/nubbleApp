import React from 'react'
import { FlatList } from 'react-native'

import { useCommentsList } from '@domain'
import { useAuthCredentials } from '@services'

import { Box, Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import PostCommentBottom from './components/PostCommentBottom'
import PostCommentItem from './components/PostCommentItem'
import PostCommentTextMessage from './components/PostCommentTextMessage'

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
	const { postId, postAuthorId } = route.params
	const { bottom } = useAppSafeArea()
	const { userId } = useAuthCredentials()
	const { dataList: list, fetchNextPage, hasNextPage } = useCommentsList(postId)

	return (
		<Screen flex={1} title="Comentários" canGoBack>
			<Box flex={1} justifyContent="space-between">
				<FlatList
					data={list}
					keyExtractor={({ id }) => id.toString()}
					contentContainerStyle={{ paddingBottom: bottom }}
					renderItem={({ item }) => (
						<PostCommentItem userId={userId} postAuthorId={postAuthorId} comment={item} />
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
