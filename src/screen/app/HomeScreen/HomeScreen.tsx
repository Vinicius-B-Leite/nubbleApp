import React, { useRef } from 'react'
import { FlatList, RefreshControl } from 'react-native'

import { usePostList } from '@domain'
import { useScrollToTop } from '@react-navigation/native'

import { PostItem, Screen } from '@components'
import { AppBottomTabScreenProps } from '@routes'

import HomeEmpty from './components/HomeEmpty'
import HomeHeader from './components/HomeHeader'

export const HomeScreen: React.FC<AppBottomTabScreenProps<'HomeScreen'>> = () => {
	const { isError, isLoading, dataList: postList, fetchNextPage, refetch } = usePostList()
	const listRef = useRef<FlatList>(null)

	useScrollToTop(listRef)
	return (
		<Screen flex={1} style={{ paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0 }}>
			<FlatList
				ref={listRef}
				data={postList}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <HomeHeader />}
				contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
				onEndReached={() => fetchNextPage()}
				onEndReachedThreshold={0.1}
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
				refreshing={isLoading}
				renderItem={({ item }) => <PostItem post={item} />}
				ListEmptyComponent={<HomeEmpty error={isError} isLoading={isLoading} />}
				showsVerticalScrollIndicator={false}
			/>
		</Screen>
	)
}
