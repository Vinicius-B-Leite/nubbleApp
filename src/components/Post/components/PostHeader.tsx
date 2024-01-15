import React from 'react'

import { Box, ProfileAvatar, Text } from '@components'

type PostHeaderProps = {
	profileURL: string
	userName: string
}

const PostHeader: React.FC<PostHeaderProps> = ({ profileURL, userName }) => {
	return (
		<Box flexDirection="row" alignItems="center" mb="s16">
			<ProfileAvatar profileURL={profileURL} />
			<Text preset="paragraphMedium" semiBold ml="s12">
				{userName}
			</Text>
		</Box>
	)
}

export default PostHeader
