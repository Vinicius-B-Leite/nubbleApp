import React from 'react'
import { Image } from 'react-native'

import { Box, Text } from '@components'

type PostHeaderProps = {
	profileURL: string
	userName: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ profileURL, userName }) => {
	return (
		<Box flexDirection="row" alignItems="center" mb="s16">
			<Image source={{ uri: profileURL }} style={{ width: 32, height: 32, borderRadius: 14 }} />
			<Text preset="paragraphMedium" semiBold ml="s12">
				{userName}
			</Text>
		</Box>
	)
}

export default PostHeader
