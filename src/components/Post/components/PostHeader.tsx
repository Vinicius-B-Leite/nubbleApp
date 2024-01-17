import React from 'react'

import { Box, ProfileAvatar, Text, TouchableOpacityBox } from '@components'

type PostHeaderProps = {
	profileURL: string
	userName: string
	onPress: () => void
}

const PostHeader: React.FC<PostHeaderProps> = ({ profileURL, userName, onPress }) => {
	return (
		<TouchableOpacityBox onPress={onPress} flexDirection="row" alignItems="center" mb="s16">
			<ProfileAvatar profileURL={profileURL} />
			<Text preset="paragraphMedium" semiBold ml="s12">
				{userName}
			</Text>
		</TouchableOpacityBox>
	)
}

export default PostHeader
