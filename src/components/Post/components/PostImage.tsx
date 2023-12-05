import React from 'react'
import { Dimensions, Image } from 'react-native'

type PostImageProps = {
	imageURL: string
}

const PostImage: React.FC<PostImageProps> = ({ imageURL }) => {
	return (
		<Image
			source={{ uri: imageURL }}
			style={{
				width: Dimensions.get('screen').width,
				height: 300,
				marginHorizontal: -24,
			}}
		/>
	)
}

export default PostImage
