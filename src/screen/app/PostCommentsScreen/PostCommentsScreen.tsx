import React from 'react'
import { FlatList } from 'react-native'

import { useCommentsList } from '@domain'

import { Box, Screen, TextMessage } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import PostCommentBottom from './components/PostCommentBottom'
import PostCommentItem from './components/PostCommentItem'

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
	const { postId } = route.params
	const { bottom } = useAppSafeArea()
	const { postList: list, fetchNextPage, hasNextPage } = useCommentsList(postId)

	return (
		<Screen flex={1} title="Comentários" canGoBack>
			<Box flex={1} justifyContent="space-between">
				<FlatList
					data={list}
					keyExtractor={({ id }) => id}
					contentContainerStyle={{ paddingBottom: bottom }}
					renderItem={({ item }) => <PostCommentItem comment={item} />}
					ListFooterComponent={
						<PostCommentBottom hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
					}
					showsVerticalScrollIndicator={false}
				/>

				<TextMessage value="asdas" placeholder="Adicione um comentário" onPressSend={() => {}} />
			</Box>
		</Screen>
	)
}
