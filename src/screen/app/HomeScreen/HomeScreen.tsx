import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Post, postService } from '@domain'

import { PostItem, Screen } from '@components'
import { AppBottomTabScreenProps } from '@routes'

import HomeHeader from './components/HomeHeader'

export const HomeScreen: React.FC<AppBottomTabScreenProps<'HomeScreen'>> = () => {
	const [postList, setPostList] = useState<Post[]>([])
	useEffect(() => {
		postService.getList().then(setPostList)
	}, [])

	return (
		<Screen style={{ paddingBottom: 0, paddingTop: 0, paddingHorizontal: 0 }}>
			<FlatList
				data={postList}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={() => <HomeHeader />}
				renderItem={({ item }) => <PostItem post={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</Screen>
	)
}
