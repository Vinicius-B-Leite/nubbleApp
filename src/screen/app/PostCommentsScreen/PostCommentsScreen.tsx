import React from 'react'
import { FlatList } from 'react-native'

import { useCommentsList } from '@domain'

import { Screen } from '@components'
import { useAppSafeArea } from '@hooks'
import { AppScreenProps } from '@routes'

import PostCommentBottom from './components/PostCommentBottom'
import PostCommentItem from './components/PostCommentItem'

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
	const { postId } = route.params
	const { bottom } = useAppSafeArea()
	const { postList: list, fetchNextPage, hasNextPage } = useCommentsList(postId)

	return (
		<Screen title="Comentários" canGoBack>
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
		</Screen>
	)
}
